import React, {useEffect, useState} from 'react';
import axios from "axios";
import {ContainerGlobal} from "../GlobalStyle";
import {BarAmount, BarBox, BarContainer, BarName, BarPrice} from "./CinamaBarStyle";

const CinemaBarComponent = () => {

    const [allItems, setAllItems] = useState([])

    useEffect(() => {
        GetCinemaBarItems()
    }, []);

    const GetCinemaBarItems = async () => {
        try {
            const items = await axios.get("http://localhost:9321/barItems")
            setAllItems(items.data)
        }
        catch {

        }
    }

    return (
        <ContainerGlobal>
            <BarContainer>
            {
                allItems.map((items) =>

                    <BarBox>
                    {/*@ts-ignore*/}
                    <BarName>{items.itemName}</BarName>
                        {/*@ts-ignore*/}
                        <BarAmount>{items.itemAmount}</BarAmount>
                    {/*    @ts-ignore*/}
                        <BarPrice>{items.itemPrice}</BarPrice>
                    </BarBox>

                )
            }
            </BarContainer>
        </ContainerGlobal>
    );
};

export default CinemaBarComponent;
