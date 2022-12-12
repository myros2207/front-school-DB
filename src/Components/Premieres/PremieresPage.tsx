import React, {useEffect, useState} from 'react';
import {IPremieres} from "./IPremieres";
import axios from "axios";
import PremiersComponent from "./PremiersComponent";
import {PremiereContainer, PremieresBox} from "./PremieresStyle";
import {ContainerGlobal} from "../GlobalStyle";

const PremieresPage = () => {

    const [allPremieres, setAllPremieres] = useState<IPremieres[]>([])

    useEffect(() => {

        GetPremieres()
    }, []);
    const GetPremieres = async () => {
        try {
            const premieres = await axios.get("http://localhost:9321/premieres/2022-12-14")
            setAllPremieres(premieres.data)
            console.log(premieres.data)

        }
        catch {

        }
        // @ts-ignore
    }

    return (
        <ContainerGlobal>
            <PremiereContainer>
            {
                allPremieres.map((premieres) =>
                    <PremieresBox>
                {/*        @ts-ignore*/}
                <PremiersComponent PremiereId={premieres.premiereId} PremiereDate={premieres.premiereData} FilmImage={premieres.film.image} FilmTitle={premieres.film.filmName}/>
                    </PremieresBox>

                )
            }
            </PremiereContainer>
            <h2>Test</h2>
            <button onClick={GetPremieres}>Get s</button>
        </ContainerGlobal>
    );
};

export default PremieresPage;



