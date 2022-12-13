import React, {useEffect, useState} from 'react';
import axios from "axios";
import {ContainerGlobal} from "../GlobalStyle";

const CinemaWorker = () => {

    const [allCinemaWorker, setAllCinemaWorker] = useState([])

    useEffect(() => {
        GetAllWorker()
    }, []);

    const GetAllWorker = async () => {
        try {
            const worker = await axios.get("http://localhost:9321/cinemaWorkers")
            setAllCinemaWorker(worker.data)
        } catch {

        }
    }

    return (
        <ContainerGlobal>
            <h1>Ilosc pracowików : {allCinemaWorker.length}</h1>
            {
                allCinemaWorker.map((work) =>
                    <div>

                    </div>
                )
            }

            <div>
                {/*@ts-ignore*/}
                {/*<h1>The best worker in mouth: {allCinemaWorker[2].workerFirstName} {allCinemaWorker[2].workerSecondName}</h1>*/}
            </div>
        </ContainerGlobal>
    );
};

export default CinemaWorker;
