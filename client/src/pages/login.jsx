import React from "react";
import { Button, Typography } from "@mui/material"
import { GoogleAuthProvider, signInWithPopup, getAuth } from "firebase/auth"
import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";
import { useNavigate } from "react-router-dom";

export default function login() {
    const auth = getAuth();
    const navigate = useNavigate();
    const { user } = useContext(AuthContext);

    const handedLoginWithGoogle = async () => {
        const provider = new GoogleAuthProvider();
        const res = await signInWithPopup(auth, provider);
        console.log({ res });
    };

    if (user?.uid) {
        navigate('/');
        return;
    }
    return (
        <>
            <Typography>Welcome to Note App</Typography>
            <Button variant="outlined" sx={{ marginTop: '10px' }} onClick={handedLoginWithGoogle}>
                Login with Google
            </Button>
        </>
    )
}