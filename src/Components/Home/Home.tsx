import React from 'react';
import NavbarComponent from "../UI/NavbarComponent";
import {Text} from "@chakra-ui/react";
import FilmsComponent from "../Fims/FilmsComponent";

const Home = () => {
    return (
        <div>
            <Text textAlign={"center"}>KELIIOS</Text>
            <FilmsComponent/>
        </div>
    );
};

export default Home;