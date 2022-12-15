import styled from "@emotion/styled";

export const FilmsContainer = styled.div`
    
    display: grid;
    grid-template-columns: auto auto auto;
  @media(max-width: 760px){
    display: flex;
    flex-direction: column;
  }
    `
export const FilmsPhoto = styled.img`
    border-radius: 5px ;
    width: 80%;
    height: 100%;
    margin: auto;
  //z-index: 1;
`

export const FilmsBox = styled.div`
  margin: 10px 0;
  background: #570A57;
  margin: 5px;
  border-radius: 5px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  //justify-content: center;
`
export const FilmsName =  styled.h2`
  color: #E8C4C4;
`

export const FilmsDescription = styled.p`
    font-size: 13px;
`

export const FilmsRate = styled.p`
  //position: absolute;
  border: 1px solid;
  border-radius: 20px;
  margin-right: 10px;
  background: #A91079;
  padding: 5px;
  float: right;
  //width: 3% ;
  //margin-left: 15vw ;
`


