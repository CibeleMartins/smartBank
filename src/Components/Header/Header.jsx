import React from "react";
import bank_logo from "../../assets/images/bank_logo.svg";
import styled from 'styled-components';
import {primaryColor} from '../UI/variables'


const BtnHeader = styled.a `
  text-align: center;
  border-radius: 3px;
  padding: 5px 20px;
  margin: 0 10px;
  font-weight: 600;
  border: 2px solid white;
  color: ${(props)=> props.primary ? primaryColor : 'white'};
  background: ${(props)=> props.primary ? 'white' : primaryColor};
`;

const StyledHeader = styled.nav `
  background-color: ${primaryColor};
  display: flex;
  justify-content: space-between;
  padding: 0 15vw;
  height: 10vh;
  align-items: center;
`;

const Logo = styled.img `
  height: 50px;
  width: 50px;
`;


const Cabecalho = () => {
  return (
    <StyledHeader className="cabecalho">
      <Logo src={bank_logo} alt="Logo Smart Bank"/>
        <div>
          <BtnHeader 
          className="btn-secundario" 
          href="https://google.com"
          primary
          > Ajuda
          </BtnHeader>

          <BtnHeader 
          className="btn-secundario" 
          href="https://google.com"
          > Sair
          </BtnHeader>
        </div>
    </StyledHeader>
  );
};

export default Cabecalho;
