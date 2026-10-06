'use client';

import styled from 'styled-components';

export default function Learn() {
    return<>
        <Wrapper>   
            <Button>Hello World</Button>
        </Wrapper>
    </>
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background: hsl(210deg 15% 6%);
    color: white;
`

const Button = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.5rem 1.5rem;
    margin: 0;
    cursor: pointer;
    position: relative;
    border: none;
    background: transparent;
    isolation: isolate;

    &:before {
      content: '';
      z-index: -1;
      position: absolute;
      inset: 0;
      border: 1px solid hsl(210deg 15% 25%);
      border-radius: 4px;
      transition: transform 200ms;
      background-color: 200ms;
    }

    &:hover:before{
        transform: scale(1.1);
        border-color: hsl(210deg 15% 35%);
        background-color: hsl(210deg 15% 12%);
    }
`;