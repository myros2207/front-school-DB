import React, {useState} from 'react';
import axios from "axios";

const CinemaWorker = () => {

    const [allCinemaWorker, setAllCinemaWorker] = useState([])
    const GetAllWorker = async () => {
        try {
            const worker = await axios.get("http://localhost:9321/cinemaWorkers")
            setAllCinemaWorker(worker.data)
        }
        catch {

        }
        console.log(allCinemaWorker)
    }

    return (
        <div>
            <h1>Ilosc pracowików : {allCinemaWorker.length}</h1>
            {
                allCinemaWorker.map((work) =>
                <div>
                    
                </div>
                )
            }
            <button onClick={GetAllWorker}>Worker get</button>
        </div>
    );
};

export default CinemaWorker;
