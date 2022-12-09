import { Button, Container, Input } from '@chakra-ui/react';
import axios from 'axios';
import { useState } from 'react';
// @ts-ignore
import React from 'react';

import { useNavigate } from 'react-router-dom';

const CustomersLogin = () => {

    const [login, setLogin] = useState("")
    const [password, setPassword] = useState("")

    const navigate = useNavigate()


    const LogIn = async () => {
        try {
            const loginStatus = await axios.patch("http://localhost:9321/loginCustomer", {
                "login": login,
                "password": password
            })
            if (loginStatus.data === true) {
                console.log("you ok")
            }
        }
        catch {

        }
    }
    return (
        <>
            <Container>
                <Input placeholder="login" value={login} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setLogin(e.target.value)} />
                <Input placeholder="password" value={password} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)} />
                <Button onClick={LogIn}>Login</Button>
                <></>
            </Container>
        </>
    );
};

export default CustomersLogin;