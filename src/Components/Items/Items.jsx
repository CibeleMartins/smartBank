import React from 'react';
import styled from 'styled-components';
import Item from './Item';
import ImageFilter from  '../../components/UI/ImageFilter'


const Items = styled.div `

  box-shadow: 4px 4px 20px 0px rgba(0,0,0,0.1);
  border-radius: 10px;
  margin: 2px 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 10px;
  font-size: 12px;
  box-sizing: border-box;
 


  .text {
    color: grey;
    font-weight: lighter;

  }

`

export default function render(props) {
  return (

  <Items>
    <span>{ImageFilter(props.type)}</span>
    <Item {...props}></Item>
    <span className='text'>{props.date}</span>
  </Items>
  )
}