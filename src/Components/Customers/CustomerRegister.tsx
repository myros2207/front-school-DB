import { Button, Container, Input } from '@chakra-ui/react';
import axios from 'axios';
import { useState } from 'react';
import React from 'react';

import { useNavigate } from 'react-router-dom';

const CustomersRegister = () => {

    const [firstName, setFirstName] = useState("")
    const [secondName, setSecondName] = useState("")
    const [age, setAge] = useState("")
    const [login, setLogin] = useState("")
    const [password, setPassword] = useState("")

    const navigate = useNavigate()


    const LogIn = async () => {
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
        <>
            <Container>
                <Input placeholder="firstName" value={firstName} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFirstName(e.target.value)} />
                <Input placeholder="secondName" value={secondName} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSecondName(e.target.value)} />
                <Input placeholder="age" value={age} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setAge(e.target.value)} />
                <Input placeholder="login" value={login} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setLogin(e.target.value)} />
                <Input placeholder="password" value={password} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)} />
                <Button onClick={LogIn}>Login</Button>
            </Container>
        </>
    );
};

export default CustomersRegister;