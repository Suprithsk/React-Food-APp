import React from "react";
import ReactDOM from "react-dom/client";
import Body from "./components/Body";
import SignIn from "./components/SignIn";
import NotFoundPage from "./components/NotFoundPage";
import SignUp from "./components/SignUp";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import ContactUs from "./components/Contact";
import HeaderComponent from "./components/Header";
import Menu from "./components/Menu";
import Cart from "./components/Cart";
import { FirebaseProvider } from "./context/FirebaseContext";

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            { path: "/", element: <Body /> },
            { path: "/contact", element: <ContactUs /> },
            { path: "/menu/:restaurantId", element: <Menu /> },
            {path:"/cart",element:<Cart/>}
        ],
        errorElement: <NotFoundPage />,
    },
    {
        path: "/signin",
        element: <SignIn />,
        errorElement: <NotFoundPage />,
    },
    {
        path: "/signup",
        element: <SignUp />,
        errorElement: <NotFoundPage />,
    },

]);

function AppLayout() {
    return (
            <div className="app">
                <HeaderComponent />
                <Outlet />
            </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
<FirebaseProvider>
    <RouterProvider router={appRouter} />
</FirebaseProvider>
); 
