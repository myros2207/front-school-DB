import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import axios from "axios";
import {ContainerGlobal} from "../GlobalStyle";
import {PremieresIdBox, PremieresIdContainer} from "./PremieresStyle";

const PremiersById = () => {

    const params = useParams()
    const [premieresById, setPremieresById] = useState([])

    useEffect(() => {
        // GetPremieresById()
    }, []);
    const GetPremieresById = async () => {
        try {
            const premieres = await axios.get("http://localhost:9321/premiere/" + params.premieresId)
            console.log(premieres.data)
            setPremieresById(premieres.data)
        }
        catch {

        }
    }
    const BuyTicket = async () => {
        try {
            const ticket = await axios.post("http://localhost:9321/ticket",{
                "premiereId": params.premieresId,
                "customerId": localStorage.getItem("CustomerID")
            })
        }
        catch {

        }
    }
    return (
        <ContainerGlobal>
            <button onClick={GetPremieresById}>get</button>
        {/*<button onClick={GetPremieresById}>Get</button>*/}
            <PremieresIdContainer>
                {
                    premieresById.map((film) =>
                    <PremieresIdBox>
                        {/*@ts-ignore*/}
                        <h1>{film.filmName}</h1>
                    </PremieresIdBox>
                    )
                }
            </PremieresIdContainer>
        </ContainerGlobal>
    );
};

export default PremiersById;
