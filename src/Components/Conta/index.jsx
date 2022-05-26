import React, { useState } from "react";
import styled from 'styled-components'
import dinheiro from "../../assets/images/dinheiro.png";
import visibilityOn from "../../assets/images/visibilityOn.png";
import visibilityOff from "../../assets/images/visibilityOff.png";

import {Icone, Box, Button, Detail, Balance, BoxTwo, BoxThree, Paragraph} from '../UI/index'
import Title from '../Title/Title'


const IconeImg = styled(Icone)`
  margin-top: 2px;
  background-color:white;
  border-radius: 30px;
  width: 25px;
`;

const IconeDist= styled(Icone) `
    margin-right: 30px;
`;

const Conta = () => {
  const [toggleState, untoggle] = useState(true);

  const toggleHandler = () => {
    untoggle((toggleState) => !toggleState);
  };

  return (
    <Box>
      <Title>CONTA</Title>
      <BoxTwo>
        <Detail>
          <IconeDist src={dinheiro} alt="Ícone Saldo" />
        </Detail>
        <Paragraph>SALDO</Paragraph>
      </BoxTwo>

      <BoxThree>
        {toggleState ? (
          <Balance>
            <Detail>R$</Detail><Paragraph>0,00</Paragraph>
          </Balance>
        ) : null}
      </BoxThree>

      <Button onClick={toggleHandler}>
        <IconeImg
          src={toggleState ? visibilityOff : visibilityOn}
        />
      </Button>
    </Box>
  );
};

export default Conta;
