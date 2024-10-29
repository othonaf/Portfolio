import styled, { keyframes } from 'styled-components';
import {
  Container as RSContainer,
  NavbarToggler as RSNavbarToggler,
  Navbar as RSNavbar,
  Nav as RSNav,
  NavLink as RSNavLink,
  Card as RSCard,
  Col as RSCol,
  CardTitle as RSCardTitle,
  CardText as RSCardText,
  Button as RSButton
} from 'reactstrap';
import { Link as RRLink } from 'react-router-dom';
import fundo1 from './fundo1.jpg';


export const CardsProjetos = styled(RSCard)`
    background-color: #4e4e4e;
    width: 300px;
    
    @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 20px;
  }
`;
export const ProjetosContainer = styled.div`
    width: 270px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 100px;
    color: #fff;

    @media (max-width: 768px) {
      margin: auto;
      width: 100%;
      margin-bottom: 20px;
      grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 500px) {
      grid-template-columns: 1fr;
    }
`;
export const DescricaoProjt = styled(RSCardText)`
    margin-top: 50px;

    @media (max-width: 500px){
      font-size: larger;
    }
`;

export const TituloProjeto = styled(RSCardTitle)`
    margin-top: -10px;

    @media (max-width: 500px){
      font-size: larger;
    }
`;

export const Pai = styled.div`
    position: relative;
    font-family: "Consolas", 'Courier New', monospace;
    color: #ebf5f5;
    min-height: 100%;
    width: 100%;
    height: 80%;

    @media (max-width: 767px) {
        position: relative;  
        padding: 0px;
        width: 100%;
        font-size: 40px;
    }
    
`;
export const BandButton = styled.button`
    background: none;
    border: none;
`;
export const BackApp = styled.div`
  height: 100vh;
  background-image: url(${fundo1});
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

  @media (max-width: 767px) {
        padding: 10px; 
        font-size: 14px; 
        width: 100%;
        position: fixed;
        height: 100%;
    }
`;
export const ButtonBrasil = styled.img`
    border-radius: 50%;
    width: 38px;
    height: 38px;
`;
export const Perfil = styled.img`
    border-radius: 50%;
`;

export const BackFooter = styled.div`
    display: grid;
    grid-template-rows: auto auto auto;
    grid-template-columns: 1fr 1fr;
    margin-top: 20px;
    background-color: #656161;
    font-size: larger;
    font-family: "Consolas", 'Courier New', monospace;
    color: #ffffff;
    width: 100%;
    position: relative;

    @media (max-width: 767px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: center;
        position: relative;
        font-size: 22px; 
        width: 130%;
    }
`;
export const Nome = styled.div`
 grid-column: span 2;
  text-align: center;
`;

export const Contato = styled.div`
  padding-left: 120px;
  text-align: center;

  @media (max-width: 760px) {
    text-align: center;
    justify-content: center;
  }
`;
export const Redes = styled.div`
  padding-right: 120px;
  text-align: center;
`;
export const ContatoWhats = styled.a`
  text-decoration: none;
  color: white;
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

    @media (max-width: 767px) {
        padding: 10px; 
        font-size: 22px; 
        width: 500px;
    }
`;
export const Button2 = styled(RSButton)`
    margin-top: 50px;
`;
export const Titulo = styled.h4`
  padding-top: 20px;
  padding-bottom: 20px;
`;
export const TitulosFooter = styled.h6`
  padding-top: 8px;
  font-size: medium;
`;
export const Titulo3 = styled.h4`
    padding-top: 20px;
`;
export const Titulo4 = styled.h5`
    padding-top: 150px;
`;
export const Whatsapp = styled.img`
    height: 20px;
    width: 20px;
`;
export const Body = styled.body`
    display: flex;
    min-height: 100%;
    flex-direction: row;

    @media (max-width: 500px) {
    margin: 5px;
    padding: 5px;
    max-width: 500px;
    display: flex;
    flex-direction: column;
}
`;
export const Background = styled.div`
    margin-top: 200px;
    background-color: #3e4451;
    position: relative;
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

export const HOME_HAND_HQYY5 = styled.span`
    animation: ${Home_wave__eb3wd} 2s infinite;
    transform-origin: 70% 70%;
    display: inline-block;
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
  height: 100%;
  overflow: auto;

&:nth-child(even):before {
  content: '';
  position: absolute;
  left: -12%;
  top: 0;
  width: 0px;
  min-height: 100%;
  border: 1px dashed #fff;
  z-index: -1;
}
`;
export const LinhaDireita = styled.div`
  height: 100%;
  overflow: auto;

&:nth-child(even):before {
  content: '';
  position: absolute;
  right: -12%;
  top: 0;
  width: 0px;
  min-height: 100%;
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
  position: relative;
  width: 45%;
  padding: 30px;
  border-radius: 10px;
  color: #fff;
  display: block;
  margin: 20px 0;
  position: relative;
  background: #f00;

  @media (max-width: 700px) {
    width: 100%;
    
    &:nth-child(even) ${CartaoBody}:before{
    content: '';
    position: absolute;
    left: -12%;
    top: 0;
    width: 0px;
    height: 100%;
    border: 1px dashed #fff;
    z-index: -1;
  }
  &:nth-child(odd) ${LinhaDireita}:before{
    content: '';
    position: absolute;
    left: -12%;
    top: 0;
    width: 0px;
    height: 100%;
    border: 1px dashed #fff;
    z-index: -1;
  }
  &:nth-child(odd):before{
    content: '';
    position: absolute;
    left: -13%;
    top: 50%;
    transform: translateY(-50%);
    width: 20px;
    height: 20px;
    border: 5px solid #191919;
    border-radius: 50%;
  }
  &:nth-child(odd):after{
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

  &:nth-child(2), &:nth-child(2):before{
    background: #ff4f4f;
  }

  &:nth-child(3), &:nth-child(3):before{
    background: #ffb84f;
  }

  &:nth-child(4), &:nth-child(4):before{
    background: #3dca5c;
  }

  &:nth-child(5), &:nth-child(5):before{
    background: #565252;
  }

  &:nth-child(6), &:nth-child(6):before{
    background: #4fa0ff;
  }

  &:nth-child(even) ${CartaoBody}:before{
    content: '';
    position: absolute;
    left: -12%;
    top: 0;
    width: 0px;
    height: 100%;
    border: 1px dashed #fff;
    z-index: -1;
  }
  &:nth-child(odd) ${LinhaDireita}:before{
    content: '';
    position: absolute;
    right: -11%;
    top: 0;
    width: 0px;
    height: 100%;
    border: 1px dashed #fff;
    z-index: -1;
  }
`;

export const Nav = styled(RSNav)`
    display: flex;
    flex-direction: column;

    @media (max-width: 768px) {
      display: contents;
      flex-direction: row;
      font-size: 25px;
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

  @media (max-width: 767px) {
        height: auto;
        min-height: 80px;
        width: 500px;
        color: #ebf5f5;
        font-size: 40px;
        
    }
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
export const CadImage = styled.img`
    width: 270px;
    height: 160px;

    @media (max-width: 767px) {
      width: auto;
      height: 250px;
    }
`;

export const SkillSection = styled.div`
  position: relative;
  margin: 100px 0;
`;

export const HeadingSkills = styled.h1`
  text-align: center;
  font-size: 30px;
  color: #fff;
  text-transform: capitalize;
  font-weight: 300;
  margin-bottom: 100px;
`;

export const SkillsContainer = styled.div`
  width: 95%;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 100px;
  color: #fff;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`;
export const SkillLevel = styled.div`
  position: absolute;
  top: 80px;
  right: 0;
  width: 150px;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 22px;
  border-radius: 50%;
  border: 10px solid;
`;

export const SkillCard = styled.div`
  position: relative;
  background-color: rgb(48, 52, 67);
  

  &:nth-child(1) ${SkillLevel}{
    background: #52ff4f28;
    border-color: #52ff4f;
    color: #52ff4f;
  }

  &:nth-child(2) ${SkillLevel}{
    background: #4fa0ff28;
    border-color: #4fa0ff;
    color: #4fa0ff;
  }

  &:nth-child(3) ${SkillLevel}{
    background: #ffed4f28;
    border-color: #ffed4f;
    color: #ffed4f;
  }

  &:nth-child(4) ${SkillLevel}{
    background: #ff4f4f28;
    border-color: #ff4f4f;
    color: #ff4f4f;

  }

  &:nth-child(5) ${SkillLevel}{
    background: #4fdfff28;
    border-color: #4fdfff;
    color: #4fdfff;
  }
  &:nth-child(6) ${SkillLevel}{
    background: #4fdfff28;
    border-color: #4fdfff;
    color: #4fdfff;
  }
  &:nth-child(7) ${SkillLevel}{
    background: #4fdfff28;
    border-color: #4fdfff;
    color: #4fdfff;
  }
  &:nth-child(8) ${SkillLevel}{
    background: #4fdfff28;
    border-color: #4fdfff;
    color: #4fdfff;
  }
  &:nth-child(9) ${SkillLevel}{
    background: #4fdfff28;
    border-color: #4fdfff;
    color: #4fdfff;
  }
  &:nth-child(10) ${SkillLevel}{
    background: #4fdfff28;
    border-color: #4fdfff;
    color: #4fdfff;
  }
  &:nth-child(11) ${SkillLevel}{
    background: #4fdfff28;
    border-color: #4fdfff;
    color: #4fdfff;
  }
  &:nth-child(12) ${SkillLevel}{
    background: #4fdfff28;
    border-color: #4fdfff;
    color: #4fdfff;
  }
  &:nth-child(13) ${SkillLevel}{
    background: #4fdfff28;
    border-color: #4fdfff;
    color: #4fdfff;
  }
`;

export const SkillImg = styled.img`
  display: block;
  margin: auto;
  height: 200px;
`;

export const SkillName = styled.h1`
  font-size: 30px;
  font-weight: 300;
  text-align: center;
  text-transform: capitalize;
  margin: 30px 0 20px;
  text-decoration: none;
`;

export const SkillInfo = styled.p`
  text-align: center;
  opacity: 0.5;
  font-size: 18px;
  line-height: 30px;
`;

export const CardBadge = styled.div`
  padding-top: 15px;
  padding-left: 25px;
`;

export const Badges = styled.div`
  &:nth-child(2) { grid-area: badge1; }
  &:nth-child(3) { grid-area: badge2; }
  background-color: #656161; //D3D3D3
  color: white;
  width: 400px;
  height: 270px;
  padding-top: 15px;
    
`;
export const Certificacoes = styled.div`
  display: grid;
  grid-template-rows: auto auto;
  grid-template-columns: 1fr 1fr;
  grid-template-areas: 
    "titulo titulo"
    "badge1 badge2";
  gap: 10px;
  justify-content: center;
  align-items: center;
  padding-left: 10%;
  padding-bottom: 10%;

  @media (max-width: 500px) {
    grid-template-columns: 1fr;
    grid-template-areas:
      "titulo"
      "badge1"
      "badge2";
  }
`;
export const Selo = styled.img`
    position: absolute;
    top: 93%;
    right: 6%;
    width: 150px;
    height: 150px;
    z-index: 1;

    @media (max-width: 500px) {
      top: 95.2%;
      right: 2%;
  }

`;
export const Selo2 = styled.img`
    position: absolute;
    top: 93%;
    left: 36%;
    width: 150px;
    height: 150px;
    z-index: 1;

    @media (max-width: 500px) {
      top: 97.5%;
      left: 68%;
  }
`;
export const TituloCert = styled.div`
  grid-area: titulo;
  padding-bottom: 30px;
  padding-right: 10%;
  justify-content: center;
  align-items: center;
  font-size: larger;
`;