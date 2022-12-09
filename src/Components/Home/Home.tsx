import React from 'react';
import NavbarComponent from "../UI/NavbarComponent";
import {Text} from "@chakra-ui/react";
import FilmComponent from "../Fims/FilmComponent";

const Home = () => {
    return (
        <div>
            <Text textAlign={"center"}>KELIIOS</Text>
            <FilmComponent/>
        </div>
    );
};

export default Home;