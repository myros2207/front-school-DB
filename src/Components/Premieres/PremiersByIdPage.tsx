import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import axios from "axios";
import PremiersById from "./PremiersById";
import {IPremieresById} from "./IPremieres";

const PremiersByIdPage = () => {
    const params = useParams()
    const [premiereById, setPremiereById] = useState<IPremieresById[]>([])

    useEffect(() => {
        if  (!Array.isArray(premiereById)){
            setPremiereById([premiereById])
        }
        GetPremiereById()
    }, []);

    const GetPremiereById = async () => {
        try {

            const premiere = await axios.get("http://localhost:9321/premiere/" + params.premieresId)
            setPremiereById(premiere.data)
            console.log(premiere.data)
        }
        catch {
            
        }
        console.log(premiereById)
    }

    return (
        <div>
            {/*{*/}
            {/*    premiereById.map((premier, index) =>*/}
            {/*    //    @ts-ignore*/}
            {/*    <PremiersById key={index} PremiereId={premier.premiereId} PremiereDate={premier.premiereDate} FilmImage={premier.film.filmName} FilmTitle={premier.film.filmName} FilmDescription={premier.film.filmDescription} HallName={premier.hall.hallName} HallSeatsAmount={premier.hall.hallSeatsAmount}/>*/}
            {/*    )*/}
            {/*}*/}
            <button onClick={GetPremiereById}>Get al</button>
        </div>
    );
};

export default PremiersByIdPage;
