// @ts-ignore
import React from 'react';
import TicketsComponent from "../Tickets/TicketsComponent";
import {ContainerGlobal} from "../GlobalStyle";
import {useNavigate} from "react-router-dom";

const CustomerComponent = () => {
    const navigate = useNavigate()
    const LogOut = () => {
        localStorage.setItem("Login", "")
        localStorage.setItem("CustomerID", "")
        navigate("/")
        window.location.reload()
    }

    return (
        <ContainerGlobal>
            <h1>{localStorage.getItem("Login")}</h1>
            <button onClick={LogOut}>Log out</button>
            <TicketsComponent/>
        </ContainerGlobal>
    );
};

export default CustomerComponent;