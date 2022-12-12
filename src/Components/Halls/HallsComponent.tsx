import React, {useEffect, useState} from 'react';
import axios from "axios";
import {HallName, HallContainer, HallBox, HallSeatsAmount} from "./HallsStyle"
import {ContainerGlobal} from "../GlobalStyle";
const HallsComponent = () => {

    const [allHalls, setAllHalls] = useState([])
    const PhotoCinema = require("./cinema.png")

    useEffect(() => {
    GetAllHals()
    }, []);

    const GetAllHals = async () => {
        try {
            const halls = await axios.get("http://localhost:9321/halls")
            setAllHalls(halls.data)
            console.log(allHalls)
        } catch {

        }
    }

    return (
        <ContainerGlobal>
            <HallContainer>
                {
                    allHalls.map((hall) =>
                        <HallBox>
                            {/*@ts-ignore*/}
                            <HallName>{hall.hallName}</HallName>
                            {/*@ts-ignore*/}
                            <h1>{hall.hallSeatsAmount}</h1>
                            <img src={PhotoCinema} alt=""/>
                        </HallBox>)
                }
            </HallContainer>

        </ContainerGlobal>
    );
};

export default HallsComponent;
