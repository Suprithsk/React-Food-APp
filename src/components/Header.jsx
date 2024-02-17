import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { FirebaseContext } from "../context/FirebaseContext";

const HeaderComponent = () => {
    const navigate = useNavigate();
    const firebaseCtx = useContext(FirebaseContext);
    console.log(firebaseCtx)
    const user = firebaseCtx.user
    return (
        <div className="header">
            <h1 className="heading-tag"
                onClick={() => {
                    navigate('/')
                }}
            >Food Villa</h1>
            <div className="nav-items">
                <ul>
                    {!user ? (
                        <>
                            <li onClick={() => navigate('/signin')}>Sign In</li>
                            <li onClick={() => navigate('/signup')}>Sign Up</li>
                        </>
                    ) : (
                        <li>
                            Welcome, {user.userName}
                        </li>
                    )}
                    <li
                        onClick={() => {
                            navigate('/contact')
                        }}
                    >Contact</li>
                    <li 
                        onClick={() => {
                            navigate('/cart')
                        }}
                    >Cart <span>({firebaseCtx?.cart?.items?.length})</span></li>
                    {user && <li onClick={()=>{
                            firebaseCtx.logout()
                            navigate('/signin')
                        }}>
                            Logout
                        </li>}
                </ul>
            </div>
        </div>
    );
}
export default HeaderComponent;