import React, {useEffect, useState} from 'react';
import axios from "axios";
import {ContainerGlobal} from "../GlobalStyle";
import {FilmsBox, FilmsContainer, FilmsDescription, FilmsName, FilmsPhoto} from "./FilmsSyle";

const FilmComponent = () => {

    const [allFilm, setAllFilm] = useState([])

    useEffect(() => {
        GetAllFilms()
    }, []);

    const GetAllFilms = async () => {
        try {
            const get = await axios.get("http://localhost:9321/films")
            setAllFilm(get.data)
            console.log(allFilm)
        }
        catch {

        }
    }

    return (
        <ContainerGlobal>
            <FilmsContainer>
                {
                    allFilm.map(film =>
                            // @ts-ignore
                        <FilmsBox>
                            {/*@ts-ignore*/}
                            {/*@ts-ignore*/}
                            <FilmsPhoto src={film.image}/>
                            {/*@ts-ignore*/}
                            <FilmsName>{film.filmName}</FilmsName>
                            {/*@ts-ignore*/}
                            <FilmsDescription>{film.filmDescription}</FilmsDescription>

                        </FilmsBox>
                    )
                }
            </FilmsContainer>
        </ContainerGlobal>


    );
};

export default FilmComponent;
