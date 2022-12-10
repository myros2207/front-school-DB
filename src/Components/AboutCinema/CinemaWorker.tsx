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
    }

    return (
        <div>

        </div>
    );
};

export default CinemaWorker;
