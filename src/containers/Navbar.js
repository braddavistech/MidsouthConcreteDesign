import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Image } from 'react-bootstrap';
import styled from 'styled-components';
import { mainColor, backgroundColor } from '../constants';


const NavBar = styled(Navbar)`
  display: flex !important;
  flex-direction: ${({ mobile }) => mobile ? 'column !important' : 'row'};
  height: 80px;
`;

const NavbarSect = styled.section`
  display: flex;
  flex-direction: row !important;
  align-items: center;
  width: 100vw;
  justify-content: ${({ mobile }) => mobile ? 'center' : 'start'};
`;

const NavbarImage = styled(Image)`
  ${({ mobile }) => mobile ?
    `
      margin: 5px 5px 0 0;
      width: 45px;
    ` :
    `
      margin: 10px;
      width: 65px;
    `}
`;

const BrandName = styled.a`
  text-align: center;
  padding-left: 5px !important;
  font-weight: bolder;
  text-decoration: none !important;
  color: ${mainColor};
  font-size: ${({ mobile }) => mobile ? '6vw' : '30px'};
`;

const NavlinkSect = styled.section`
  display: flex;
  flex-direction: row !important;
  align-items: center;
  justify-content: space-evenly;
  align-items: ${({ mobile }) => mobile ? 'center' : 'flex-end'};
  ${({ mobile }) => !mobile && 'height: 100%;'}
  width: ${({ mobile }) => mobile ? '100vw' : '40%'};
`;

const NavLink = styled.a`
  font-weight: bolder;
  color: ${({ active }) => active && active === true ? '#314155' : '#6E7C8E'} !important;
`;



const Navigation = (props) => {
  const { Logo, isMobile } = props;

  const active = () => {
    if (window.location.href.includes('/photos')) return 'photos';
    else if (window.location.href.includes('/contact-us')) return 'contact';
    return 'home';
  };

  return (
    <NavBar bg="light" mobile={isMobile}>
      <NavbarSect mobile={isMobile}>
        <NavbarImage src={Logo} className="navbar-img" alt="Mid-South Concrete" mobile={isMobile}/>
        <BrandName className="mr-0 navbar-title" href="/" mobile={isMobile}>Mid-South Concrete Design</BrandName>
      </NavbarSect>
      <NavlinkSect mobile={isMobile} >
        <NavLink active={active() === 'home'} href="/">Home</NavLink>
        <NavLink active={active() === 'photos'} href="/photos">Photos</NavLink>
        <NavLink active={active() === 'contact'} href="/contact-us">Contact Us</NavLink>
      </NavlinkSect>
    </NavBar>
  );
};

export default Navigation;