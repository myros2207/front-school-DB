import React, {useEffect, useState} from 'react';
import axios from "axios";
import {ContainerGlobal} from "../GlobalStyle";
import {CarouselBox, CarouselContainer, CarouselFilmName, CarouselImage} from "./CarouselStyle";
import {Link} from "react-router-dom";

const PremieresCarousel = () => {

    const [allPremieres, setAllPremieres] = useState([])

    useEffect(() => {
        GetPremieres()

    }, []);

    const GetPremieres = async () => {
        try {
            const premieres = await axios.get("http://localhost:9321/premieres/2022-12-14")
            setAllPremieres(premieres.data)
            // @ts-ignore
        } catch {

        }
    }
    const [currentPage, setCurrentPage] = useState(1)
    const [inOnePage, setInOnePage] = useState<number>(5)

    const lastListPageIndex = currentPage * inOnePage
    const firstListPageIndex = lastListPageIndex - inOnePage
    const currentPageIndex = allPremieres.slice(firstListPageIndex, lastListPageIndex)

    const [isEndRight, setIsEndRight] = useState(false)
    const [isEndLeft, setIsEndLeft] = useState(true)

    const pageNumber = []

    for (let i = 1; i < (allPremieres.length / inOnePage); i++) {
        pageNumber.push(i)

    }

    const Next = () => {
        if (currentPage <= pageNumber.length) {
            setCurrentPage(prev => prev + 1)
            setIsEndLeft(false)
        }
        if (currentPage > pageNumber.length) {
            console.log("end");
            setCurrentPage(1)
            setIsEndRight(true)
        }

    }

    const Prev = () => {
        if (currentPage > 1) {
            setCurrentPage(prev => prev - 1)
            setIsEndRight(false)
        }
        if (currentPage === 1) {
            console.log("start");
            setCurrentPage(pageNumber.length + 1)
            setIsEndLeft(true)
        }
    }
    return (
        <>

            <CarouselContainer>
                <button onClick={Prev}><span> &#10094; </span></button>
                {
                    currentPageIndex.map((premier) =>
                        <CarouselBox>
                            {/*@ts-ignore*/}
                            <Link to={"/premieres"}>
                                {/*@ts-ignore*/}
                                <CarouselFilmName>{premier.film.filmName}</CarouselFilmName>
                                {/*@ts-ignore*/}
                                <CarouselImage src={premier.film.image} alt=""/>
                            </Link>
                        </CarouselBox>
                    )
                }
                <button onClick={Next}><span>&#10095;</span></button>
            </CarouselContainer>

            <h1>strona : {currentPage} z {pageNumber.length + 1}</h1>
        </>
    );
};

export default PremieresCarousel;
