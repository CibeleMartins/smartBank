import React from 'react';
import styled from 'styled-components';
import alimentacao from '../../assets/images/alimentacao.png';
import outros from '../../assets/images/outros.png';
import saude from '../../assets/images/saude.png';
import transporte from '../../assets/images/transporte.png';
import utilidades from '../../assets/images/utilidades.png';

import { Icone } from '../UI/index';

const ExtractIcon = styled(Icone)`

  background-color: ${({theme})=> theme.body};
  border-radius: 2px;
  width: 25px;

`

export default function ImageFilter (type) {
  const Images = {
    
    Restaurante:<ExtractIcon src={alimentacao} alt='restaurante' />,
    Utilidades:<ExtractIcon src={utilidades} alt='utilidades' />,
    Saude:<ExtractIcon src={saude} alt='saude' />,
    Transporte:<ExtractIcon src={transporte} alt='trasnporte'/>,
    default:<ExtractIcon src={outros} alt='outros'/>,
  
  }


  return Images[type] || Images.default
}