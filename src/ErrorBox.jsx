import React from 'react'
import styled from 'styled-components'
import { mobile } from './responsive'
const Container = styled.div`
    flex: 1;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color:${props=>props.bgColor};
    margin: 0 10px;
    border-radius: 3px;
    padding: 10px;
    ${mobile({flexDirection:'column',margin:'10px 0'})}

`
const Element = styled.span`
color:white;
`


function ErrorBox(props) {
  return (
    <>
    <Container bgColor={props.bgColor}>
        <Element>{props.type}</Element>
        <Element>{props.number}</Element>
    </Container>
   
    </>
  )
}

export default ErrorBox