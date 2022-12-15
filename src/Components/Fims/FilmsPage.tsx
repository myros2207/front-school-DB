import React from 'react';
import FilmsComponent from "./FilmsComponent";
import {ContainerGlobal, ContentGlobal} from "../GlobalStyle";

const FilmsPage = () => {
    return (
        <ContainerGlobal>
            <ContentGlobal>
            <FilmsComponent/>
            </ContentGlobal>
        </ContainerGlobal>
    );
};

export default FilmsPage;
