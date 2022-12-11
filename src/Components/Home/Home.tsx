import React from 'react';
import NavbarComponent from "../UI/NavbarComponent";
import {Text} from "@chakra-ui/react";
import FilmsComponent from "../Fims/FilmsComponent";
import PremieresCarousel from "../Premieres/PremieresCarousel";

const Home = () => {
    return (
        <div>
            <PremieresCarousel/>
            <Text textAlign={"center"}>KELIIOS</Text>

            <FilmsComponent/>
        </div>
    );
};

export default Home;