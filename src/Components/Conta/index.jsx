import React, { useState } from "react";
import styled from 'styled-components'

import privado from "../../assets/images/privado.svg";
import olho_icone from "../../assets/images/olho.svg";
import dinheiro from "../../assets/images/dinheiro.png";

import {Icone, Box, Button, Detail, Balance, BoxTwo, BoxThree} from '../UI/index'
import Title from '../Title/Title'


const IconeImg = styled(Icone)`
  margin-top: 2px;
  background-color: black;
`;

const IconeDist= styled(Icone) `
    margin-left: 40px;
`;

const Conta = () => {
  const [toggleState, untoggle] = useState(true);

  const toggleHandler = () => {
    untoggle((toggleState) => !toggleState);
  };

  return (
    <Box>
      <Title>Conta</Title>
      <BoxTwo>
        <p>Saldo Disponível</p>
        <Detail>
          <IconeDist src={dinheiro} alt="Ícone Saldo" />
        </Detail>
      </BoxTwo>

      <BoxThree>
        {toggleState ? (
          <Balance>
            <Detail>R$</Detail>  0,00
          </Balance>
        ) : null}
      </BoxThree>

      <Button onClick={toggleHandler}>
        <IconeImg
          src={toggleState ? privado : olho_icone}
          alt="Privacidade do Saldo"
        />
      </Button>
    </Box>
  );
};

export default Conta;
