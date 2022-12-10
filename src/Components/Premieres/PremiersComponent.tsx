import React, {useState} from 'react';
import axios from "axios";
import {ContainerGlobal} from "../GlobalStyle";

const PremiersCompoenent = () => {

    const [allPremieres, setAllPremieres] = useState([])

    const GetPremieres = async () => {
        try {
            const premieres = await axios.get("http://localhost:9321/premieres/2022-12-14")
            setAllPremieres(premieres.data)
            console.log(premieres.data)
        }
        catch {

        }
    }

    return (
        <ContainerGlobal>
            {
            allPremieres.map((premieres) =>
                <div></div>
            )
            }
            <button onClick={GetPremieres}>Get premieres</button>
        </ContainerGlobal>
    );
};

export default PremiersCompoenent;
