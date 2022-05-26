import React from "react";
import logoBank from "../../assets/images/logoBank.png";
import styled from 'styled-components';
import {primaryColor} from '../UI/variables'


const BtnHeader = styled.a `
  text-align: center;
  padding: 5px 20px;
  margin: 0 10px;
  color: ${(props)=> props.primary ? 'white': ''};
  letter-spacing: 3px;
  font-size: 10px;
  :hover {
    color: #daa520;
    transition: 1s;
  }
`

const StyledHeader = styled.nav `
  background-color: ${primaryColor};
  display: flex;
  justify-content: space-between;
  padding: 10px;
  width: 100%;
  height: 15vh;
  align-items: center;
  position: fixed;
`;

const Logo = styled.img `
  height: 90px;
  width: 100px;
  margin-left: 30px;
`;


const Cabecalho = () => {
  return (
    <StyledHeader className="cabecalho">
      <Logo src={logoBank} alt="Logo Smart Bank"/>
        <div>
          <BtnHeader 
          href="https://google.com"
          primary
          >AJUDA
          </BtnHeader>

          <BtnHeader 
          href="https://google.com"
          primary
          >SAIR
          </BtnHeader>
        </div>
    </StyledHeader>
  );
};

export default Cabecalho;
