import React, { useState } from "react";
import styled from 'styled-components'

import privado from "../../assets/images/privado.svg";
import olho_icone from "../../assets/images/olho.svg";
import dinheiro from "../../assets/images/dinheiro.svg";

import {Icone, Box, Button, Detail, Balance} from '../UI/index'


const IconeImg = styled(Icone)`
  margin-top: 2px;
`

const Conta = () => {
  const [toggleState, untoggle] = useState(true);

  const toggleHandler = () => {
    untoggle((toggleState) => !toggleState);
  };

  return (
    <Box>
      <h2>Conta</h2>
      <div style={{ fontSize: "26px", padding: "20px 0" }}>
        Saldo disponível{" "}
        <span>
          <Icone src={dinheiro} alt="Ícone Saldo" />
        </span>
        {toggleState ? (
          <Balance className="saldo">
            <Detail className="detalhe">R$</Detail> 0,00{" "}
          </Balance>
        ) : null}
      </div>

      <Button className="btn" onClick={toggleHandler}>
        <IconeImg
          style={{ marginTop: "2px" }}
          src={toggleState ? privado : olho_icone}
          alt="Privacidade do Saldo"
        />
      </Button>
    </Box>
  );
};

export default Conta;
