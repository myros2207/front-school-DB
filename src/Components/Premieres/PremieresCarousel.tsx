import React, {useEffect, useState} from 'react';
import axios from "axios";
import {ContainerGlobal} from "../GlobalStyle";
import {CarouselBox, CarouselContainer, CarouselImage} from "./CarouselStyle";
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
        }
        catch {

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
        if  (currentPage === 1) {
            console.log("start");
            setCurrentPage(pageNumber.length+1)
            setIsEndLeft(true)
        }
    }
    return (
        <ContainerGlobal>
            <button onClick={GetPremieres}>getcarousel</button>
            <CarouselContainer>
                <button onClick={Prev}> <span> &#10094; </span> </button>
                {
                    currentPageIndex.map((premier) =>
                    <CarouselBox>
                        {/*@ts-ignore*/}
                        <Link to={"/premieres/"+premier.premiereId}>
                        {/*@ts-ignore*/}
                        <h1>{premier.film.filmName}</h1>
                        {/*@ts-ignore*/}
                        <CarouselImage src={premier.film.image} alt=""/>
                        </Link>
                    </CarouselBox>
                    )
                }
                <button onClick={Next}> <span>&#10095;</span> </button>
            </CarouselContainer>

            <h1>strona : {currentPage} z {pageNumber.length + 1}</h1>
        </ContainerGlobal>
    );
};

export default PremieresCarousel;


//
// import {Flex, Text, Image} from "@chakra-ui/react";
// import {Box} from "@chakra-ui/layout";
// import React, {useEffect, useState} from "react";
// import axios from "axios";
//
// const PremieresCarousel = () => {
//     const [slides, setSlides] = useState([]);
//     const [currentSlide, setCurrentSlide] = useState(0);
//     const slidesCount = slides.length;
//     const carouselStyle = {
//         transition: "all .5s",
//         ml: `-${currentSlide * 100}%`,
//     };
//     const SLIDES_INTERVAL_TIME = 3000;
//     const ANIMATION_DIRECTION = "right";
//     useEffect( () => {
//         const prevSlide = () => {
//             setCurrentSlide((s) => (s === 0 ? slidesCount - 1 : s - 1));
//         };
//
//         const nextSlide = () => {
//             setCurrentSlide((s) => (s === slidesCount - 1 ? 0 : s + 1));
//         };
//
//         const automatedSlide = setInterval(() => {
//             ANIMATION_DIRECTION.toLowerCase() === "left" ? prevSlide() : nextSlide();
//         }, SLIDES_INTERVAL_TIME);
//         return () => clearInterval(automatedSlide);
//         GetPremieres()
//     }, [slidesCount]);
//
//     const GetPremieres = async () => {
//         try {
//             const premieres = await axios.get("http://localhost:9321/premieres/2022-12-14")
//             setSlides(premieres.data)
//         }
//         catch {
//
//         }
//     }
//
//     // @ts-ignore
//     return (
//         <Flex
//             w="full"
//             bg="#edf3f8"
//             _dark={{
//                 bg: "#3e3e3e",
//             }}
//             p={10}
//             alignItems="center"
//             justifyContent="center"
//         >
//             <Flex w="full" overflow="hidden">
//                 <Flex pos="relative" h="400px" w="full" {...carouselStyle}>
//                     {slides.map((slide, sid) => (
//                         <Box key={`slide-${sid}`} flex="none" boxSize="full" shadow="md">
//                             <Text
//                                 color="white"
//                                 fontSize="xs"
//                                 p="8px 12px"
//                                 pos="absolute"
//                                 top="0"
//                                 whiteSpace="nowrap"
//                             >
//                                 {sid + 1} / {slidesCount}
//                             </Text>
//                             {/*@ts-ignore*/}
//                             <Image src={slide.film.image} alt="carousel image" boxSize="full" backgroundSize="cover"
//                             />
//                         </Box>
//                     ))}
//                 </Flex>
//             </Flex>
//         </Flex>
//     );
// };
//
//
// export default PremieresCarousel