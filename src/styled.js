import styled, { keyframes } from 'styled-components';
import {
  Container as RSContainer,
  NavbarToggler as RSNavbarToggler,
  Navbar as RSNavbar,
  Nav as RSNav,
  NavLink as RSNavLink,
  Card as RSCard,
  Col as RSCol, 
  Button as RSButton
} from 'reactstrap';
import { Link as RRLink } from 'react-router-dom';

export const Fundo = styled.div`
  height: 100vh;
  background-image: url(./fundo1.jpg);
  background-size: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -1;

  &::after {
    content: "";
    background: rgba(0, 0, 0, 0.6); 
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
`;
export const backFooter = styled.div`
     margin-top: 200px;
      background-color: #3e4451;
      position: relative;
`;

export const Container = styled(RSContainer)`
    margin-top: 170px;
    align-items: center;
    text-align: center;
    font-size: larger;
    font-family: "Consolas", 'Courier New', monospace;
    color: #ffffff;
    width: 100%;
    position: relative;
`;
export const Pai = styled.div`
    position: relative;;
    font-family: "Consolas", 'Courier New', monospace;
    color: #ebf5f5;
    min-height: 100%;
    height: 100vh;
    flex: 1;
`;
export const Button2 = styled(RSButton)`
    margin-top: 50px
`;
export const Titulo3 = styled.h4`
    padding-top: 20px;
`;
export const Titulo4 = styled.h5`
    
    font-size: medium;
`;
export const Whatsapp = styled.img`
    height: 20px;
    width: 20px;
`;
export const Body = styled.body`
    display: flex;
    min-height: 100vh;
    flex-direction: column;
`
export const Background = styled.div`
    margin-top: 200px;
    background-color: #3e4451;
    position: relative;
`;
export const HOME_HAND_HQYY5 = styled.span`
    animation: Home_wave__eb3wd 2s infinite;
    transform-origin: 70% 70%;
    display: inline-block;
`;

export const Home_wave__eb3wd = keyframes`
  0% {
    transform: rotate(0deg);
  }
  10% {
    transform: rotate(14deg);
  }
  20% {
    transform: rotate(-8deg);
  }
  30% {
    transform: rotate(14deg);
  }
  40% {
    transform: rotate(-4deg);
  }
  50% {
    transform: rotate(10deg);
  }
  60% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(0deg);
  }
`;
export const Card = styled(RSCard)`
    font-size: larger;
    margin-top: 180px;
    background-color: rgb(48, 52, 67);
    color: #ffffff;
`;
export const Console1 = styled.code`
    color: rgb(13, 188, 90);
`;
export const Console2 = styled.code`
    color: rgb(195, 83, 195);
`;
export const Console3 = styled.code`
    color: rgb(229, 196, 22);
`;
export const Timeline = styled.div`
      display: block;
      width: 80%;
      margin: 150px auto;
      margin-top: 0%;
`;
export const Heading = styled.h1`
    margin-bottom: 110px;
`;
export const CartaoBody = styled.div`
&:nth-child(even):before {
  content: '';
  position: absolute;
  left: -12%;
  top: 0;
  width: 0px;
  height: 100%;
  border: 1px dashed #fff;
  z-index: -1;
}
`;
export const CartaoTitulo = styled.h1`
    font-size: 30px;
    font-weight: 300;
    margin-bottom: 20px;
`;
export const Cartao = styled.div`
    width: 45%;
    padding: 40px;
    border-radius: 10px;
    color: #fff;
    display: block;
    margin: -80px 0;
    position: relative;
    background: #f00;
    &:nth-child(2), &:nth-child(2):before {
    background: #ff4f4f;
  }
  &:nth-child(3), &:nth-child(3):before {
    background: #faaa31;
  }
  &:nth-child(4), &:nth-child(4):before {
    background: #3dca5c;
  }
  &:nth-child(5), &:nth-child(5):before {
    background: #565252;
  }
  &:nth-child(6), &:nth-child(6):before {
    background: #4fa0ff;
  }
  &:nth-child(odd):after{
  content: '';
  position: absolute;
  right: -8.5%;
  top: 50%;
  transform: translateY(-50%);
  width: 7%;
  height: 2px;
  background: #fff;
  z-index: -1;
}
&:nth-child(odd):after{
  content: '';
  position: absolute;
  right: -8.5%;
  top: 50%;
  transform: translateY(-50%);
  width: 7%;
  height: 2px;
  background: #fff;
  z-index: -1;
}
&:nth-child(even){
  margin-left: auto;
}
&:nth-child(even):before{
  content: '';
  position: absolute;
  left: -15%;
  top: 50%;
  transform: translateY(-50%);
  width: 20px;
  height: 20px;
  border: 5px solid #191919;
  border-radius: 50%;
}
&:nth-child(even):after{
  content: '';
  position: absolute;
  left: -8.5%;
  top: 50%;
  transform: translateY(-50%);
  width: 7%;
  height: 2px;
  background: #fff;
  z-index: -1;
}
&:nth-child(odd):before{
  content: '';
  position: absolute;
  right: -13%;
  top: 50%;
  transform: translateY(-50%);
  width: 20px;
  height: 20px;
  border: 5px solid #191919;
  border-radius: 50%;
}
`;

export const Nav = styled(RSNav)`
    display: flex;
    flex-direction: column;

    @media (max-width: 768px) {
      display: contents;
      flex-direction: row;
  }

  .submenu {
    margin-right: 30px;
    align-items: center;
    justify-content: left;
  }
`;
export const Col = styled(RSCol)`
    margin-top: 50px;
`;

export const NavbarToggler = styled(RSNavbarToggler)`
  color: #ebf5f5;
`;

export const Navbar = styled(RSNavbar)`
  background-color: #3e4451;
  font-family: "Consolas", 'Courier New', monospace;
  color: #ebf5f5;
  font-size: 20px;
`;

export const Button = styled.button`
  background: none;
  border: none;
`;

export const Brasil = styled.div`
  border-radius: 50%;
  width: 38px;
  height: 38px;
`;

export const NavLink = styled(RSNavLink)`
    font-family:"Consolas", 'Courier New', monospace;
    color: #ebf5f5;
    align-items: center;
    text-decoration: none;
`;

export const Linker = styled(RRLink)`
    font-family:"Consolas", 'Courier New', monospace;
    color: #ebf5f5;
    align-items: center;
    text-decoration: none;
`
