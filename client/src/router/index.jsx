import { createBrowserRouter, Outlet } from "react-router-dom";
import Home from "../pages/home"
import Login from "../pages/login"

const AuthLayout = () => {
    return <Outlet />
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