'use client';
import React from 'react';
import styled from 'styled-components';
import LogoSection from '../LogoSection';

function Header() {
  return (
    <Wrapper>
      <LogoSection />

      <RightSection>
        <Menu>
          <MenuItem href="/">Home</MenuItem>
          <MenuItem href="/about">About</MenuItem>
          <MenuItem href="/services">Workout Split</MenuItem>
          <MenuItem href="/contact">Contact</MenuItem>
        </Menu>

        <AuthButtons>
          <LoginButton href="/login">Login</LoginButton>
          <SignupButton href="/signup">Sign Up</SignupButton>
        </AuthButtons>
      </RightSection>
    </Wrapper>
  );
}

export default Header;

const Wrapper = styled.header`
  position: sticky;
  top: 0;
  z-index: 1000;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 16px 32px;
  background: var(--foreground);
  border-bottom: 1px solid #eee;
  color: #fff;
`;

const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;
`;

const Menu = styled.nav`
  display: flex;
  gap: 24px;
`;

const MenuItem = styled.a`
  text-decoration: none;
  color: #fff;
  font-size: 16px;
  font-weight: 500;

  &:hover {
    color: var(--primary);
  }
`;

const AuthButtons = styled.div`
  display: flex;
  gap: 12px;
`;

const LoginButton = styled.a`
  padding: 8px 16px;
  border: 1px solid #0070f3;
  border-radius: 6px;
  text-decoration: none;
  color: #0070f3;
`;

const SignupButton = styled.a`
  padding: 8px 16px;
  background: var(--primary);
  color: white;
  border-radius: 6px;
  text-decoration: none;
`;