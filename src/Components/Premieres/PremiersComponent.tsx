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
    const [customerId, setCustomerId ] = useState("")

    useEffect(() => {
        GetPremieres()
    }, []);

    const GetPremieres = async () => {
        try {
            const premieres = await axios.get("http://localhost:9321/premieres/2022-12-14")
            setAllPremieres(premieres.data)
            setPremiereId(premieres.data.premiereId)
            // @ts-ignore
            setCustomerId(localStorage.getItem("CustomerID"))
        }
        catch {

        }
        // @ts-ignore
        console.log(allPremieres.map((prem) => prem.premiereId))
    }

    const BuyTicket = async () => {
        // try {
        //     const ticket = await axios.post("http://localhost:9321/ticket",{
        //         "premiereId": premiereId,
        //         "customerId": customerId
        //     })
        //     console.log(ticket.data)
        // }
        // catch {
        //
        // }
        console.log(customerId + " id cust " + premiereId + " premiera id ")
    }

    return (
        <ContainerGlobal>
            {
            allPremieres.map((premieres) =>
                <PremieresBox>
                    {/*@ts-ignore*/}
                    <Link to={"/premieres/"+premieres.premiereId}>
                        {/*@ts-ignore*/}
                        <img src={premieres.film.image}/>
                        <button onClick={(BuyTicket)} >buy</button>
                    </Link>
                </PremieresBox>
            )
            }
            <button onClick={GetPremieres}>Get premieres</button>
        </ContainerGlobal>
    );
};

export default PremiersCompoenent;
