import {Button, Container, Input} from '@chakra-ui/react';
import axios from 'axios';
import {useState} from 'react';
// @ts-ignore
import React from 'react';

import {useNavigate} from 'react-router-dom';
import {EntranceButton, EntranceButtonBox, EntranceContainer, EntranceError, EntranceInput} from "./CustomersStyled";
import secureLocalStorage from "react-secure-storage";
import {ContainerGlobal} from "../GlobalStyle";

const CustomersLogin = () => {

    const [login, setLogin] = useState("")
    const [password, setPassword] = useState("")
    const [loginError, setLoginError] = useState<any>("")

    const navigate = useNavigate()


    const LogIn = async () => {
        if (login !== "" && password !== "") {
            try {
                const loginStatus = await axios.post("http://localhost:9321/loginCustomer", {
                    "login": login,
                    "password": password
                })
                if (loginStatus.data.loggedIn === true) {
                    console.log("you ok")
                    navigate("/customers")
                    localStorage.setItem("Login", login)
                    localStorage.setItem("CustomerID", loginStatus.data.customerId)
                    window.location.reload()
                } else if (loginStatus.data === false) {
                    setLoginError(
                        "There is no such user yet, please register please"
                    )
                }
            } catch {

            }
        }
        else {
            console.log("All fields must be filled")
        }
    }


    return (
        <ContainerGlobal>
            <EntranceContainer>
                <EntranceInput placeholder="login" value={login}
                               onChange={(e: React.ChangeEvent<HTMLInputElement>) => setLogin(e.target.value)}/>
                <EntranceInput placeholder="password" value={password}
                               onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}/>
                <EntranceError>{loginError}</EntranceError>
                <EntranceButtonBox>
                    <EntranceButton onClick={LogIn}>Login</EntranceButton>
                    <EntranceButton onClick={() => navigate("/register")}>Register</EntranceButton>
                </EntranceButtonBox>
            </EntranceContainer>
        </ContainerGlobal>
    );
};

export default CustomersLogin;