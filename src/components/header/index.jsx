import { useState } from "react";
import styled from "styled-components";
import { ShowOrders } from "./showOrders";
import { Basket } from "../basket";
import { FaBasketShopping } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Wrapper = styled.header`
  display: flex;
  padding: 10x 20px;
  width: 1280px;
  margin: 50px auto;
`;

const StyledWrapper = styled.div`
padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

`;

const Nav = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;

  
`;

const Logo = styled.span`
    font-weight: 600 ;
    font-size: 30px;

  
`;


const Shop = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-left: auto;
  margin-right: 20px;
`;

const StyledLink = styled.a`
   float: right;
   list-style: none;
   margin-left: 25px;
  font-size: 17px;
  display: inline;
  text-decoration: none;
  color: #414141;
`;

export const Header = (props) => {
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <Wrapper>
      <StyledWrapper>
        <Logo>Mebel House</Logo>
        <Shop>
          <FaBasketShopping onClick={() => setCartOpen(!cartOpen)} />
          {cartOpen ? <ShowOrders /> : <Basket />}
        </Shop>
        <Nav>
          <li>
            <StyledLink href=""> О нас</StyledLink>
          </li>
          <li>
            <StyledLink href="">Контакты</StyledLink>
          </li>
          <li>
            <StyledLink href="">Кабинет</StyledLink>
          </li>
        </Nav>
      </StyledWrapper>
    </Wrapper>
  );
};
