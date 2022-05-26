
import styled from 'styled-components';

export const Icone = styled.img `

  height: 25px;
  width: 20px;
  background-color: ${({theme})=> theme.body};

`;

export const Paragraph = styled.p`

  color:${({theme})=> theme.text};
  background-color:${({theme})=> theme.body};

`;

export const Box = styled.div `

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${({theme})=> theme.body};
  border-radius: 5px;
  box-shadow: 4px 4px 20px 0px rgba(0, 0, 0, 0.04);
  padding: 20px;
  width: 48%;
  height: 50%;
  background-color: #0000;
  border: 1px solid #daa520;
  box-sizing: border-box;

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
  color: ${({theme})=> theme.inside};
  font-weight: 600;
  font-size: 14px;
  padding: 8px 20px;
  cursor: pointer;
  background-color: ${({theme})=> theme.inside};
`;

export const Detail = styled.span `
  color: ${({theme})=> theme.text};
  font-size: 24px;
  width: 50px;
  background-color: ${({theme})=> theme.body};
  margin-right: 30px;
`;

export const Balance = styled.div `
  font-weight: 700;
  font-size: 32px;
  background-color: ${({theme})=> theme.body};
  display: flex;
  align-items: center;
  font-size: 25px;
  
`;

export const BoxTwo = styled.div `
height: auto;
width: 150px;
background-color: ${({theme})=> theme.body};
color: grey;
font-size: "26px"; 
padding: "20px 0";
display: flex;
align-items: center;
align-content: flex-start;
`;

export const BoxThree = styled.div `
height: auto;
width: 200px;
background-color: ${({theme})=> theme.body};
color: grey;
font-size: "26px"; 
padding: "20px 0";
display: flex;
`;