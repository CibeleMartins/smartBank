
import styled from 'styled-components';

export const Icone = styled.img `

  height: 25px;
  width: 20px;

`;

export const Box = styled.div `

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: white;
  border-radius: 5px;
  box-shadow: 4px 4px 20px 0px rgba(0, 0, 0, 0.04);
  padding: 20px;
  width: 48%;
  background-color: #0000;
  border: 1px solid #daa520;

  @media (max-width: 800px) {

    width: 95%;
    margin: 5px;
  }
`;


export const Button = styled.button `
  margin: 15px auto 0px auto;
  display: block;
  border-radius: 20px;
  background-color: black;
  border: none;
  color: white;
  font-weight: 600;
  font-size: 14px;
  padding: 8px 20px;
  cursor: pointer;
`;


export const Detail = styled.span `
  color: grey;
  font-size: 24px;
  width: 50px;

`;

export const Balance = styled.div `
  font-weight: 700;
  font-size: 32px;
`;

export const BoxTwo = styled.div `
height: auto;
width: 200px;
background-color: black;
color: grey;
font-size: "26px"; 
padding: "20px 0";
display: flex;
align-items: center;
`;

export const BoxThree = styled.div `
height: auto;
width: 200px;
background-color: black;
color: grey;
font-size: "26px"; 
padding: "20px 0";
display: flex;
`;