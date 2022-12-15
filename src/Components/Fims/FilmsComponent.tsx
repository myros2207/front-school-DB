import React, {useEffect, useState} from 'react';
import axios from "axios";
import {ContainerGlobal} from "../GlobalStyle";
import {FilmsBox, FilmsContainer, FilmsDescription, FilmsName, FilmsPhoto, FilmsRate} from "./FilmsSyle";
import {Link} from "react-router-dom";
import {Box} from "@chakra-ui/layout";

const FilmsComponent = () => {

    const [allFilm, setAllFilm] = useState([])

    useEffect(() => {
        GetAllFilms()
    }, []);

    const GetAllFilms = async () => {
        try {
            const films = await axios.get("http://localhost:9321/films")
            setAllFilm(films.data)
            console.log(films.data)
        } catch {

        }
    }

    return (
        <>
            <FilmsContainer>
                {
                    allFilm.map(film =>
                        // @ts-ignore
                        <FilmsBox>
                            <Link to={"/test"}>

                                {/*@ts-ignore*/}
                                <FilmsPhoto src={film.image}/></Link>
                            {/*@ts-ignore*/}
                            <FilmsName>{film.filmName}</FilmsName>
                            <Box w={"100%"}>
                                {/*@ts-ignore*/}
                                <FilmsRate>{film.rate}</FilmsRate>
                            </Box>
                            {/*@ts-ignore*/}
                            <FilmsDescription>{film.filmDescription}</FilmsDescription>

                        </FilmsBox>
                    )
                }
            </FilmsContainer>
        </>


    );
};

export default FilmsComponent;
