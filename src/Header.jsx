import React from "react";
import styled from "styled-components";
import ErrorBox from "./ErrorBox";
import { mobile } from "./responsive";
const Container = styled.div`
  width: 100%;
  display: flex;
  min-height: 50px;
  ${mobile({flexDirection:'column'})}
  padding: 10px 0 ;
  background-color: #f1f1f1;

`;
function Header() {
  return (
    <Container>
      <ErrorBox bgColor={'#F44336'} type={'High'} number={2}/>
      <ErrorBox bgColor={'#FF9800'} type={'Medium'} number={2}/>
      <ErrorBox bgColor={'#4CAF50'} type={'Low'} number={1}/>
      <ErrorBox bgColor={'#2196F3'} type={'Informational'} number={2}/>
    </Container>
  );
}

export default Header;
