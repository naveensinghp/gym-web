import React from 'react';
import styled from 'styled-components';


function HomePageContent() {
  return <>
    <Wrapper>
    <HeroText>Log Workouts</HeroText>
    <RightSideImg src="homescreen.png" alt="Mobile App Screenshot"  />
    </Wrapper>
  </>;
}

export default HomePageContent;


const Wrapper = styled.div`
   

`

const HeroText = styled.div`
  color: hotpink;
  font-size: 2rem;

`

const RightSideImg = styled.img`
  height: 200px;
  width: 200px;
`;
