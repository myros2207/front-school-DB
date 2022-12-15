// @ts-ignore
import React from 'react';
import TicketsComponent from "../Tickets/TicketsComponent";
import {ContainerGlobal, ContentGlobal} from "../GlobalStyle";
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
            <ContentGlobal>
                <h1>Twój login{localStorage.getItem("Login")}</h1>
                <button onClick={LogOut}>Log out</button>
                <TicketsComponent/>
            </ContentGlobal>
        </ContainerGlobal>
    );
};

export default CustomerComponent;