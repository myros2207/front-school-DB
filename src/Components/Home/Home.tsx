import React from 'react';
import NavbarComponent from "../UI/NavbarComponent";
import {Text} from "@chakra-ui/react";

const Home = () => {
    return (
        <div>
            <NavbarComponent/>
            <Text textAlign={"center"}>KELIIOS</Text>
        </div>
    );
};

export default Home;