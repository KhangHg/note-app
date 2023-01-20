import { createBrowserRouter, Outlet } from "react-router-dom";
import Home from "../pages/home"
import Login from "../pages/login"
import AuthProvider from "../context/AuthProvider"

const AuthLayout = () => {
    return (
        < AuthProvider >
            <Outlet />
        </AuthProvider >
    );
}

export default createBrowserRouter([
    {
        element: <AuthLayout />,
        children: [
            {
                element: <Login />,
                path: '/login'
            },
            {
                element: <Home />,
                path: '/'
            }
        ]
    }
])