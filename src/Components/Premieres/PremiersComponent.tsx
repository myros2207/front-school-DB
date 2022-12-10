import React, {useState} from 'react';
import axios from "axios";
import {ContainerGlobal} from "../GlobalStyle";
import {Link} from "react-router-dom";
import { useEffect } from 'react';
import {PremieresBox} from "./PremieresStyle";

const PremiersCompoenent = () => {

    const [allPremieres, setAllPremieres] = useState([])
    // @ts-ignore
    const [premiereId, setPremiereId] = useState("")

    useEffect(() => {
        // GetPremieres()
    }, []);

    const GetPremieres = async () => {
        try {
            const premieres = await axios.get("http://localhost:9321/premieres/2022-12-14")
            setAllPremieres(premieres.data)
            setPremiereId(premieres.data.filmId)
            console.log(premieres.data)
            console.log(premieres.data.map((film:any) => film.premiereId))

        }
        catch {

        }
        // @ts-ignore
        console.log(allPremieres.map((film) => film.premiereId))
    }

    const BuyTicket = async () => {
        try {
            const ticket = await axios.post("http://localhost:9321/ticket",{
                "premiereId": premiereId,
                "customerId": localStorage.getItem("CustomerID")
            })
            console.log(ticket.data)
        }
        catch {

        }
    }

    return (
        <ContainerGlobal>
            {
            allPremieres.map((premieres) =>
                <PremieresBox>
                    {/*@ts-ignore*/}
                    {/*<Link to={"/premieres/"+premieres.premiereId}>*/}
                        {/*@ts-ignore*/}
                        <img src={premieres.film.image}/>
                        <button onClick={BuyTicket}>buy</button>
                    {/*</Link>*/}
                </PremieresBox>
            )
            }
            <button onClick={GetPremieres}>Get premieres</button>
        </ContainerGlobal>
    );
};

export default PremiersCompoenent;
