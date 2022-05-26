import React from "react";
import styled from 'styled-components';

import Title from "../Title/Title";
import Conta from "../Conta";
import { primaryColor } from "../UI/variables";


const Container = styled.div `
  background-color: ${primaryColor};
  min-height: 90vh;
  padding: 0px 15vw;
`;

const Contents = styled.section `
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  
  @media (max-width: 800px) {
  
  flex-direction: column;
  
}

`

export default ()=> {

  return (
    <Container>
      <Title>Olá!</Title>
      <Contents>
        <Conta/>
      </Contents>
    </Container>
  )

}


