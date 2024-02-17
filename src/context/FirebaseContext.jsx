import { createContext, useContext, useEffect } from "react";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase, ref, set, get } from "firebase/database";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { useState } from "react";

export const FirebaseContext = createContext(null);

// Import the functions you need from the SDKs you ne
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA89TVbmAk7WXMpeFg3ZZvpH6YLLhs9rlo",
    authDomain: "react-food-app-ae14e.firebaseapp.com",
    projectId: "react-food-app-ae14e",
    storageBucket: "react-food-app-ae14e.appspot.com",
    messagingSenderId: "513968599095",
    appId: "1:513968599095:web:52129df0ed2c163fd50fb2",
    databaseURL: "https://react-food-app-ae14e-default-rtdb.firebaseio.com/"
};

const firebaseApp = initializeApp(firebaseConfig)
const firebaseAuth = getAuth(firebaseApp)
const firebaseDatabase = getDatabase(firebaseApp)

export const FirebaseProvider = (props) => {
    //! state values
    const [user, setUser] = useState(null);
    const [cart, setCart] = useState({
        items: [],
        resId: null
    })
    useEffect(() => {
        if (user) {
            const userCart = ref(firebaseDatabase, `cart/${user.uid}`)
            get(userCart).then((snapshot) => {
                if (snapshot.exists()) {
                    const data = snapshot.val()
                    setCart({ ...cart, items: data.items, resId: data.resId })
                }else{
                    set(userCart,cart)
                }
            })
        }
    }, [user])
    const [address, setAddress] = useState(null);
    //! functions
    const signupUserWithEmailAndPassword = async (email, password, phoneNumber, userName) => {
        try {
            const res = await createUserWithEmailAndPassword(firebaseAuth, email, password);
            await set(ref(firebaseDatabase, `users/${res.user.uid}`), { phoneNumber, userName });
            setUser({ ...user, email, uid: res.user.uid, phoneNumber, userName });
            return res;
        } catch (error) {
            console.error("Sign-up error:", error);
            throw error;
        }
    };
    const logout = () => {
        setUser(null)
    }
    const signInUser = async (email, password) => {
        try {
            const res = await signInWithEmailAndPassword(firebaseAuth, email, password);
            const userDetails = await get(ref(firebaseDatabase, `users/${res.user.uid}`));
            setUser({ ...user, ...userDetails.val(), email, uid: res.user.uid });
            return res;
        } catch (error) {
            console.error("Sign-in error:", error);
            throw error;
        }
    };
    const removeFromCart = (item, resId) => {
        if (user) {
            const userCart = ref(firebaseDatabase, `cart/${user.uid}`)
            get(userCart).then((snapshot) => {
                if (snapshot.exists()) {
                    const data = snapshot.val()
                    const cartIndex = data.items.findIndex((cartItem) => cartItem.card.info.id === item.card.info.id)
                    if (cartIndex !== -1) {
                        const newCart = [...data.items]
                        newCart[cartIndex].amount -= 1
                        if (newCart[cartIndex].amount === 0) {
                            newCart.splice(cartIndex, 1)
                            if (newCart.length === 0) {
                                set(userCart, { items: [], resId: null })
                                return
                            }
                        }
                        set(userCart, { ...data, items: newCart })
                    }
                }
            })
        }
        const cartIndex = cart.items.findIndex((cartItem) => cartItem.card.info.id === item.card.info.id)
        if (cartIndex !== -1) {
            const newCart = [...cart.items]
            newCart[cartIndex].amount -= 1
            if (newCart[cartIndex].amount === 0) {
                newCart.splice(cartIndex, 1)
            }
            setCart({ ...cart, items: newCart })
        }
    }
    const addToCart = (item, resId) => {
        if (user) {
            const userCart = ref(firebaseDatabase, `cart/${user.uid}`)
            get(userCart).then((snapshot) => {
                if (snapshot.exists()) {
                    const data = snapshot.val()
                    console.log(data)
                    const cartIndex = data.items.findIndex((cartItem) => cartItem.card.info.id === item.card.info.id)
                    if (cartIndex !== -1) {
                        const newCart = [...data.items]
                        newCart[cartIndex].amount += 1
                        set(userCart, { ...data, items: newCart })
                        return
                    }
                    if (resId !== data.resId) {
                        const giveAlert = window.confirm('Do you want to clear the cart? and start afresh?')
                        console.log(giveAlert)
                        if (giveAlert) {
                            set(userCart, { items: [item], resId })
                        } else {
                            set(userCart, {
                                items: [],
                                resId: null
                            })
                        }
                    } else {
                        set(userCart, { ...data, items: [...data.items, item] })
                    }
                } else {
                    set(userCart, { items: [item], resId })
                }
            })
        }
        console.log({ items: [item], resId })
        const cartIndex = cart.items.findIndex((cartItem) => cartItem.card.info.id === item.card.info.id)
        if (cartIndex !== -1) {
            const newCart = [...cart.items]
            newCart[cartIndex].amount += 1
            setCart({ ...cart, items: newCart })
            return
        }
        if (resId !== cart.resId) {
            const giveAlert = window.confirm('Do you want to clear the cart? and start afresh?')
            console.log(giveAlert)
            if (giveAlert) {
                setCart({ items: [item], resId })
            } else {
                setCart({
                    items: [],
                    resId: null
                })
            }
        } else {
            setCart({ ...cart, items: [...cart.items, item] })
        }
    }
    return (
        <FirebaseContext.Provider value={{ signInUser, signupUserWithEmailAndPassword, user, cart, addToCart, removeFromCart,logout }}>
            {props.children}
        </FirebaseContext.Provider>
    );
};
