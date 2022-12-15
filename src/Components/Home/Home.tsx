import React from 'react';
import NavbarComponent from "../UI/NavbarComponent";
import {Text} from "@chakra-ui/react";
import FilmsComponent from "../Fims/FilmsComponent";
import PremieresCarousel from "../Premieres/PremieresCarousel";
import styled from "@emotion/styled";
import {ContainerGlobal, ContentGlobal} from "../GlobalStyle";


const Home = () => {

    const Name = styled.h1`
      //text-transform: uppercase;
      background-image: linear-gradient(-225deg,
      #231557 0%,
      #44107a 29%,
      #ff1361 67%,
      #fff800 100%);
      background-size: auto auto;
      background-clip: border-box;
      background-size: 200% auto;
      color: #fff;
      background-clip: text;
      text-fill-color: transparent;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      animation: textclip 2s linear infinite;
      //display: inline-block;
      font-size: 90px;
      text-align: center;
      @keyframes textclip {
        to {
          background-position: 200% center;
        }
      }
    `

    return (
        <ContainerGlobal>
            <ContentGlobal>
            <Name>KELIIOS</Name>
            <PremieresCarousel/>


            <FilmsComponent/>
            </ContentGlobal>
        </ContainerGlobal>
    );
};

export default Home;