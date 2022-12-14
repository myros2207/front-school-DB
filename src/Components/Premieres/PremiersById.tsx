// import React, {useEffect, useState} from 'react';
// import {Link, useParams} from "react-router-dom";
// import axios from "axios";
// import {ContainerGlobal} from "../GlobalStyle";
// import {PremieresBox, PremieresIdBox, PremieresIdContainer} from "./PremieresStyle";
//
// const PremiersById = () => {
//
//     const params = useParams()
//     // @ts-ignore
//     const [premieresById, setPremieresById] = useState([])
//     const premiereId = params.premieresId
//
//     useEffect(() => {
//         GetPremieresById()
//         console.log(params.premieresId)
//         console.log( localStorage.getItem("CustomerID"))
//     }, []);
//     const GetPremieresById = async () => {
//         try {
//             // @ts-ignore
//             const premieres = await axios.get("http://localhost:9321/premiere/" + premiereId.toString())
//             setPremieresById(premieres.data)
//             console.log(premieres.data)
//
//         }
//         catch {
//
//         }
//         console.log(premieresById)
//     }
//     const BuyTicket = async () => {
//         try {
//             const ticket = await axios.post("http://localhost:9321/ticket",{
//                 "premiereId": params.premieresId,
//                 "customerId": localStorage.getItem("CustomerID")
//             })
//             console.log(ticket.data)
//         }
//         catch {
//
//         }
//     }
//     return (
//         <ContainerGlobal>
//             {
//                 // premieresById[0].premiereId
//
//                 // premieresById.map((premiere) =>
//                 //     <div>
//                 //         {/* @ts-ignore*/}
//                 // <h1>{premiere.premiereId}</h1>
//                 //     </div>
//                 // )
//             }
//             <button onClick={GetPremieresById}>Get premieres</button>
//         </ContainerGlobal>
//     );
// };
//
// export default PremiersById;


import React, { useState } from 'react';
import {useParams} from "react-router-dom";
import axios from "axios";
import {IPremieresById} from "./IPremieres";

const PremiersById = (premiersById : IPremieresById) => {

    const params = useParams()
    const [premiereById, setPremiereById] = useState([])

    const GetPremiereById = async () => {
        const premiere = await axios.get("http://localhost:9321/premiere/"+ params.premieresId)
        setPremiereById(premiere.data)
        console.log(premiere.data)
        console.log(premiereById[0])
    }

    return (
        <div>
          <h1>{premiersById.PremiereId}</h1>
        </div>
    );
};

export default PremiersById;
