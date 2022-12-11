import React, {useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";
import axios from "axios";
import {ContainerGlobal} from "../GlobalStyle";
import {PremieresBox, PremieresIdBox, PremieresIdContainer} from "./PremieresStyle";

const PremiersById = () => {

    const params = useParams()
    const [premieresById, setPremieresById] = useState<any>([])
    const premiereId = params.premieresId

    useEffect(() => {
        // GetPremieresById()
        console.log(params.premieresId)
        console.log( localStorage.getItem("CustomerID"))
    }, []);
    const GetPremieresById = async () => {
        try {
            // @ts-ignore
            const premieres = await axios.get("http://localhost:9321/premiere/" + premiereId.toString())
            setPremieresById(premieres.data)
            console.log(premieres.data)

        }
        catch {

        }
        console.log(premieresById)
    }
    const BuyTicket = async () => {
        try {
            const ticket = await axios.post("http://localhost:9321/ticket",{
                "premiereId": params.premieresId,
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
                // premieresById[0].premiereId
            }
            <button onClick={GetPremieresById}>Get premieres</button>
        </ContainerGlobal>
    );
};

export default PremiersById;
