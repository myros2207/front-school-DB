import React, {useEffect, useState} from 'react';
import axios from "axios";
import {ContainerGlobal} from "../GlobalStyle";
import {TicketBox, TicketsContainer} from "./TicketsStyle";

const TicketsComponent = () => {

    const [allTickets, setAllTickets] = useState([])
    useEffect(() => {
        GetAllTickets()
    }, []);

    const GetAllTickets = async () => {
        try {
            const tickets = await axios.get("http://localhost:9321/tickets/" + localStorage.getItem("CustomerID"))
            setAllTickets(tickets.data)
            console.log(tickets.data)
            if (tickets.data.length === 0) {
                console.log("don't have tickets")
            }
        } catch {

        }
    }


    return (
        <ContainerGlobal>
            {
                allTickets.map((tickets) =>
                    <TicketsContainer>
                        <TicketBox>
                            {/*@ts-ignore*/}
                            <h1>{tickets.premiere.film.filmName}</h1>
                            {/*@ts-ignore*/}
                            <img src={tickets.premiere.film.image}/>
                        </TicketBox>
                    </TicketsContainer>
                )
            }
            {/*<button onClick={GetAllTickets}>All tickets</button>*/}
        </ContainerGlobal>
    );
};

export default TicketsComponent;
