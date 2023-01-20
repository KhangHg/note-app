import React from 'react'
import { useRouteError } from 'react-router-dom';

export default function errorPage() {
    const error = useRouteError();
    console.log(error);


    return (
        <div id='error-page'>
            <h1>Ohhhhh No!!</h1>
            <p>404</p>
            <p>Sorry, not found T.T</p>
        </div>
    )
}
