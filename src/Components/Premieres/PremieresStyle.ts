import styled from "@emotion/styled";

export const PremieresBox = styled.div`
  //border: 1px solid
  margin: 10px;
`

export const PremiereContainer = styled.div`
    display: grid;
  grid-template-columns: auto auto auto auto;
  @media (max-width: 800px){
    display: flex;
    flex-direction: column;
  }
`







// ============ ID ==========
export const PremieresIdContainer= styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto;
  background: red;
`

export const PremieresIdBox = styled.div`

`