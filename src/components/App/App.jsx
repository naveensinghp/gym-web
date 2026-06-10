'use client';
import React from 'react';
import Header from '../Header';
import styled from 'styled-components';
import HomePageContent from '../HomePageContent';

function App() {
  return(
    <>
       <Wrapper>
          <HomePageContent />
       </Wrapper>
    </>
  );
}

export default App;

const Wrapper = styled.div`
  padding-left: 25%;
 
   width: 100%;
  background: yellow;
  color: white;
`