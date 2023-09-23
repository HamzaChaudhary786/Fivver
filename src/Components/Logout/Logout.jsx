import React from 'react'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
const Logout = () => {
    const navigate = useNavigate();
    useEffect(() => {


        let username = sessionStorage.getItem("username");
        sessionStorage.clear();

        if (username === "" || username === null) {
            navigate('/login')

        }

    }, [])


    return (
        <>
        </>
    )
}

export default Logout