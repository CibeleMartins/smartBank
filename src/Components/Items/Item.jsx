import React from 'react';
import styled from 'styled-components';

const Item = styled.div `

  margin: 2px 0;
  display: flex;
  flex-direction: column;
  color: grey;

  .text {
    font-weight: lighter;
  }
`

export default function ItemRender({type, from, value}) {

  return (
    <Item>
      <span className='text'>
        {type}
      </span>
      <span className='text'>
        {from}
      </span>
      <span className='text'>
        {value}
      </span>
    </Item>
  )

}