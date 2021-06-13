import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.div`
  display: flex;
  flex-direction: column;
  margin: 5px;
  background-color: white;
  box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.2);
  width: 80px;
  padding: 3px;
  align-items: center;
  position: fixed;
  left: 10px;
  top: 10px;
  z-index: 1;
  border-radius: 10px;
  font-size: 14px;
`;

const Linka = styled(Link)`
  text-decoration: none;
  color: darkblue;
  padding: 5px;
  font-size: 11px;
  text-transform: uppercase;
  font-weight: 600;
`;

function Navigation() {
  return (
    <Nav>
      <Linka to="/">Home</Linka>
      <Linka to="/about">About</Linka>
    </Nav>
  );
}

export default Navigation;
