'use client';

import React from 'react';
import styled from 'styled-components';
import Header from "@/components/Header";
import Card from '@/components/Card';


export default function WorkoutSplit() {
    return(
        <>
            {/* <Card></Card> */}
            <Wrapper>
                <TitleWrapper>
                    <Title>Workout Split</Title>
                    <SmallText>Follow a structured workout split to target each muscle group and achieve your fitness goals effectively.</SmallText>
                </TitleWrapper>
            </Wrapper>
        </>
    );
}

const Wrapper = styled.div`
    padding: 20px;
`;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: baseline;
  gap: 20px;
`;

const Title = styled.div`
    font-size: 2.1rem;
`;

const SmallText = styled.div`

`;

