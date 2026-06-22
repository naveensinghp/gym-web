'use client';

import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const STEPS = [
  {
    title: 'Log Workouts',
    description:
      'Record every workout, track your progress, and stay consistent with your fitness goals. Keep all your training sessions organized in one place.',
    image:
      'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?w=1200&auto=format&fit=crop',
  },
  {
    title: 'Track Progress',
    description:
      'Monitor your fitness journey with detailed progress tracking, interactive charts, and comprehensive workout history. Visualize improvements in strength, endurance, and overall performance over time.',
    image:
      'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=1200&auto=format&fit=crop',
  },
  {
    title: 'Analyze Performance',
    description:
      'Gain a deeper understanding of your training with advanced performance analysis and meaningful insights. Review workout trends, track key metrics, and optimize your workout routines based on real data.',
    image:
      'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1200&auto=format&fit=crop',
  },
  {
    title: 'Reach Goals',
    description:
      'Stay focused, build consistency, and turn your fitness ambitions into measurable achievements. Track milestones, celebrate progress, and stay motivated throughout your journey.',
    image:
      'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=1200&auto=format&fit=crop',
  },
];

export default function HomePageContent() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const scrollTop = window.scrollY;
          const maxScroll =
            document.documentElement.scrollHeight - window.innerHeight;

          setProgress(scrollTop / maxScroll);

          ticking = false;
        });

        ticking = true;
      }
    };

    handleScroll();

    window.addEventListener('scroll', handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const stepCount = STEPS.length - 1;
  const exact = progress * stepCount;

  const lower = Math.floor(exact);
  const upper = Math.min(lower + 1, stepCount);

  const t = exact - lower;

  const currentImage =
    t < 0.5 ? STEPS[lower]?.image : STEPS[upper]?.image;

  return (
    <Wrapper style={{ height: `${STEPS.length * 100}vh` }}>
      <Left>
        {STEPS.map((step, index) => {
          const center = index / stepCount;
          const distance = Math.abs(progress - center);

          return (
            <Step key={step.title}>
              <Content
                style={{
                  opacity: Math.max(0.2, 1 - distance * 2),
                  transform: `translateY(${distance * 40}px)`,
                }}
              >
                <Title>{step.title}</Title>
                <Description>{step.description}</Description>
              </Content>
            </Step>
          );
        })}
      </Left>

      <Right>
        <Phone>
          <StyledImage
            key={currentImage}
            src={currentImage}
            alt=""
          />
        </Phone>
      </Right>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  position: relative;

  @media (max-width: 768px) {
    flex-direction: column;
    height: auto !important;
  }
`;

const Left = styled.div`
  width: 50%;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Right = styled.div`
  width: 50%;
  position: relative;

  @media (max-width: 768px) {
    display: none;
  }
`;

const Step = styled.section`
  height: 100vh;
  display: flex;
  align-items: center;
  padding: 0 80px;

  @media (max-width: 768px) {
    min-height: 100vh;
    height: auto;
    padding: 80px 24px;
  }
`;

const Content = styled.div`
  transition:
    opacity 0.3s ease,
    transform 0.3s ease;
  max-width: 650px;
`;

const Title = styled.h1`
  font-size: clamp(2.5rem, 4vw, 4.5rem);
  line-height: 1.05;
  margin-bottom: 24px;
  color: #111;
`;

const Description = styled.p`
  font-size: 1.125rem;
  line-height: 1.9;
  color: #666;
`;

const Phone = styled.div`
  position: fixed;
  top: 50%;
  right: 8%;
  transform: translateY(-50%);

  width: min(340px, 28vw);
  height: min(700px, 80vh);

  border-radius: 40px;
  overflow: hidden;

  background: white;

  box-shadow:
    0 30px 80px rgba(0, 0, 0, 0.15),
    0 8px 24px rgba(0, 0, 0, 0.08);
`;

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;

  animation: fadeIn 0.4s ease;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: scale(1.03);
    }

    to {
      opacity: 1;
      transform: scale(1);
    }
  }
`;