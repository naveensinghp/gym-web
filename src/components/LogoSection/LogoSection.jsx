import React from 'react';
import styled from 'styled-components';

function LogoSection() {
  return (
    <LinkWrapper href="/">
    <Wrapper>
      <Logo src="logo.png" alt="TrackLift logo"  />
      <Title>TrackLift</Title>
    </Wrapper>
    </LinkWrapper>
  );
}

export default LogoSection;


const LinkWrapper = styled.a`
  text-decoration: none;;
`

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Logo = styled.img`
  width: 50px;
  height: auto;
`;

const Title = styled.div`
  font-size: 1.4rem;
  font-family: var(--font-geist-mono);
  text-transform: uppercase;
  letter-spacing: 3px;
  font-weight: 600;
`;