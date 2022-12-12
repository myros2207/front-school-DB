import styled from "@emotion/styled";

export const FilmsContainer = styled.div`
    
    display: grid;
    grid-template-columns: auto auto auto;
  @media(max-width: 800px){
    display: flex;
    flex-direction: column;
  }
    `
export const FilmsPhoto = styled.img`
    border-radius: 5px ;
    width: 80%;
    margin: auto;
`

export const FilmsBox = styled.div`
  margin: 10px 0;
  background: #2B3A55;
  margin: 5px;
  border-radius: 5px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
export const FilmsName =  styled.h2`
  color: #E8C4C4;
`

export const FilmsDescription = styled.p`
color: ;
    
`

export const FilmsRate = styled.p`

`


