import React from "react";
import { Button, Typography } from "@mui/material"
import { GoogleAuthProvider, signInWithPopup, getAuth } from "firebase/auth"

export default function login() {
    const auth = getAuth();

    const handedLoginWithGoogle = async () => {
        const provider = new GoogleAuthProvider();
        const res = await signInWithPopup(auth, provider);
        console.log({ res });
    };


    return (
        <>
            <Typography>Welcome to Note App</Typography>
            <Button variant="outlined" sx={{ marginTop: '10px' }} onClick={handedLoginWithGoogle}>
                Login with Google
            </Button>
        </>
    )
}