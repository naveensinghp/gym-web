import React from 'react';
import styled from 'styled-components';

function LogoSection() {
  return (
    <Wrapper>
      <Logo src="logo.png" alt="TrackLift logo" />
      <Title>TrackLift</Title>
    </Wrapper>
  );
}

export default LogoSection;

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