import React from 'react';
import styled from 'styled-components';


function Card() {
  return <>
    <Wrapper>
      Workout Split
    </Wrapper>
  </>;
}

export default Card;

const Wrapper = styled.div`
  width: 300px;
  height: 200px;
  background-color: #f4f7fb;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  color: #333;
`
