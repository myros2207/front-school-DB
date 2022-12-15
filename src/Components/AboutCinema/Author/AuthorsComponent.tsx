import React from 'react';
import {Box} from "@chakra-ui/layout";
import {ContainerGlobal, ContentGlobal} from "../../GlobalStyle";
import {Flex, Image, Text} from "@chakra-ui/react";

const AuthorsComponent = () => {

    const egorImage = require("./photo_2022-12-15_10-20-59.jpg")
    const mkImage = require("./infoshare=+ (1).png")
    return (
        <ContainerGlobal>
            <ContentGlobal>
                <Box justifyContent={"space-between"} border={"1px solid"}>
                    <Flex justifyContent={"space-between"}>
                        <Text>
                            Front-end:
                            <p>Myroslav Torbiak</p>
                            <a href="https://github.com/myros2207">GitHub</a>
                            <h2>Napisanie calej stylizacji i funkcionalnosci po stornie urzytkownika</h2>
                        </Text>
                        <Image src={mkImage} w={"15rem"}/>
                    </Flex>
                </Box>
                <Box justifyContent={"space-between"} border={"1px solid"}>
                    <Flex justifyContent={"space-between"}>
                        <Image src={egorImage} w={"10rem"}/>
                        <Text textAlign={"right"}>
                            Back-end:
                            <p>Ehor Kochetov</p>
                            <h2>Napisanie całego backendu</h2>
                            <a href="https://github.com/Ametion">GitHub</a>
                        </Text>
                    </Flex>
                </Box>
            </ContentGlobal>
        </ContainerGlobal>
    );
};

export default AuthorsComponent;
