import React, {useState} from 'react';
import axios from "axios";
import {ContainerGlobal} from "../GlobalStyle";
import {Link, useNavigate} from "react-router-dom";
import {useEffect} from 'react';
import {PremiereContainer, PremieresBox} from "./PremieresStyle";
import {IPremieres} from "./IPremieres";

const PremiersCompoenent = (premieres: IPremieres) => {

    const navigate = useNavigate()
    // const [allPremieres, setAllPremieres] = useState<IPremieres[]>([])
    // @ts-ignore
    const [premiereId, setPremiereId] = useState("")
    const [customerId, setCustomerId] = useState("")


    //
    // const GetPremieres = async () => {
    //     try {
    //         const premieres = await axios.get("http://localhost:9321/premieres/2022-12-14")
    //         setAllPremieres(premieres.data)
    //         setPremiereId(premieres.data.premiereId)
    //         // @ts-ignore
    //         setCustomerId(localStorage.getItem("CustomerID"))
    //         console.log(premieres.data.premiereId)
    //         console.log(premieres.data)
    //     }
    //     catch {
    //
    //     }
    //     // @ts-ignore
    // }

    const BuyTicket = async () => {
        if (localStorage.getItem("CustomerID") != "") {


            try {
                const ticket = await axios.post("http://localhost:9321/ticket", {
                    "premiereId": premieres.PremiereId.toString(),
                    "customerId": localStorage.getItem("CustomerID")
                })
                console.log(ticket.data)
                if (ticket.data === true) {
                    alert("Kupiłes bilet")
                    navigate("/customers")
                }
            } catch {

            }
        } else {
            alert("If you want to buy a ticket, you need to register or log in )")
        }
    }
    return (
        <>
            {/*<PremiereContainer>*/}
            <PremieresBox>
                {/*@ts-ignore*/}
                <Link to={"/premieres/" + premieres.PremiereId}>
                    {/*@ts-ignore*/}
                    <h1>{premieres.PremiereId}</h1>
                    <img src={premieres.FilmImage}/>
                </Link>
                <button onClick={(BuyTicket)}>buy</button>
            </PremieresBox>
            {/*</PremiereContainer>*/}

        </>
    );
};

export default PremiersCompoenent;
