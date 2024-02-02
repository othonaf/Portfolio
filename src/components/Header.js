import React, { useState, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import curriculo from '../curriculo.pdf'
import { NavbarToggler, Navbar, Nav, NavLink, Linker, BandButton, ButtonBrasil } from '../styled'
import { LanguageContext } from '../LanguageContext';
import bandSpn from '../bandSpn.png'
import {
  NavbarBrand,
  NavItem,
  Collapse
} from 'reactstrap';

export default function Header(args) {
  const location = useLocation();
  const { texts, setLanguage } = useContext(LanguageContext);

  useEffect(() => {
    if (location.hash) {
      let elem = document.getElementById(location.hash.slice(1));
      if (elem) {
        elem.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }
  }, [location,]);

  const [isOpen, setIsOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <Navbar {...args} fixed="top" height='80px' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <NavbarToggler>{texts.navbar.start}</NavbarToggler>
        <div>
          <BandButton onClick={() => setLanguage('en')}><ButtonBrasil src='https://uploads-ssl.webflow.com/633c3ed2fab2dc95e0de5322/633c407d5f0413042686ada5_language.png' /></BandButton>
          <BandButton onClick={() => setLanguage('pt')}><ButtonBrasil src='https://uploads-ssl.webflow.com/633c3ed2fab2dc95e0de5322/633c407d5f0413753386ada7_language%20(1).png' alt='' loading='lazy' /></BandButton>
          <BandButton onClick={() => setLanguage('es')}>
            <ButtonBrasil src={bandSpn} alt='' loading='lazy' />
          </BandButton>
        </div>
        <Collapse isOpen={isOpen} navbar>
          <Nav navbar>
            <NavbarBrand ><Linker to="/#sobre-mim">{texts.navbar.aboutMe}</Linker></NavbarBrand>
            <NavItem>
              <NavLink ><Linker to="/trabalhos">{texts.navbar.worksAndExperiences}</Linker></NavLink>
            </NavItem>
            <NavItem>
              <NavLink ><Linker to="#background-footer">{texts.navbar.contact}</Linker></NavLink>
            </NavItem>
            <NavItem>
              <NavLink href={curriculo} download>{texts.navbar.curriculum}</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}