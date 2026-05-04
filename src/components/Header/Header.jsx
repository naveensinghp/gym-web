'use client';
import React from 'react';
import styled from 'styled-components';
import LogoSection from '../LogoSection';


function Header() {
  return (
    <Wrapper>
      <LogoSection></LogoSection>
      {/* <MenuSection></MenuSection> */}
      {/* <img src='public/logo.png' /> */}
    </Wrapper>
  );
}

export default Header;



const Wrapper = styled.div`
  background: black;
`;