import { useRadioGroup } from "@mui/material";
import React, { createContext, useEffect, useState } from "react";
import { getAuth } from 'firebase/auth';
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext()

export default function AuthProvider({ children }) {
    const [user, setUser] = useState({});
    const auth = getAuth();
    const navigate = useNavigate();

    useEffect(() => {
        const unsubcribed = auth.onIdTokenChanged((user) => {
            console.log('Form authprovider', { user });
            if (user?.uid) {
                setUser(user);
                localStorage.setItem('accessToken', user.accessToken);
            }
            else {
                //reset user infor
                setUser({});
                localStorage.clear();
                navigate('/login');
            }

        })

        return () => {
            unsubcribed();
        }
    }, [auth])

    return (
        <AuthContext.Provider value={{ user, setUser }}>
            {children}
        </AuthContext.Provider>
    )
}