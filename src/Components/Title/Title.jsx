import styled from 'styled-components';

const Title = styled.h1 `
  color: ${({theme})=> theme.inside};
  padding: 25px 0;
  background-color: ${({theme})=> theme.body};
`;

export default Title;
