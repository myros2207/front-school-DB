import { Button, Container, Input } from '@chakra-ui/react';
import axios from 'axios';
import { useState } from 'react';
// @ts-ignore
import React from 'react';

import { useNavigate } from 'react-router-dom';
import {EntranceContainer, EntranceInput} from "./CustomersStyled";
import {ContainerGlobal} from "../GlobalStyle";

const CustomersRegister = () => {

    const [firstName, setFirstName] = useState("")
    const [secondName, setSecondName] = useState("")
    const [age, setAge] = useState("")
    const [login, setLogin] = useState("")
    const [password, setPassword] = useState("")

    const navigate = useNavigate()


    const Register = async () => {
        try {
            const loginStatus = await axios.post("http://localhost:9321/registerCustomer", {
                "firstName": firstName,
                "secondName": secondName,
                "age": parseInt(age),
                "login": login,
                "password": password
            })
            if (loginStatus.data == true) {
                navigate("/login")
            }
        }
        catch {

        }
    }
    return (
        <ContainerGlobal>
            <EntranceContainer>
                <EntranceInput placeholder="firstName" value={firstName} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFirstName(e.target.value)} />
                <EntranceInput placeholder="secondName" value={secondName} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSecondName(e.target.value)} />
                <EntranceInput placeholder="age" value={age} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setAge(e.target.value)} />
                <EntranceInput placeholder="login" value={login} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setLogin(e.target.value)} />
                <EntranceInput type={"password"} placeholder="password" value={password} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)} />
                <Button onClick={Register}>Register</Button>
            </EntranceContainer>
        </ContainerGlobal>
    );
};

export default CustomersRegister;