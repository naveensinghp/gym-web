'use client';

import styled from 'styled-components';

export default function About() {
  return (
    <Wrapper>
      <Hero>
        <Title>About TrackLift</Title>
        <Subtitle>
          TrackLift is a workout tracking platform designed to help you stay
          consistent, monitor progress, and make every workout count. Whether
          you're a beginner starting your fitness journey or an experienced
          athlete focused on performance, TrackLift provides the tools you need
          to train smarter and achieve your goals.
        </Subtitle>
      </Hero>

      <Section>
        <SectionTitle>Why TrackLift?</SectionTitle>
        <Text>
          Many people struggle to remember the exercises, weights, reps, and
          sets they completed during previous workouts. Without accurate
          records, it becomes difficult to measure progress and apply
          progressive overload effectively. TrackLift solves this problem by
          keeping a complete history of your workouts in one place.
        </Text>

        <Text>
          For example, if you performed a chest press with 20 kg last week,
          TrackLift will show that information during your next workout session.
          This allows you to compare performance, increase weights when
          appropriate, and continuously improve over time.
        </Text>
      </Section>

      <Section>
        <SectionTitle>Key Features</SectionTitle>

        <FeatureGrid>
          <FeatureCard>
            <h3>Log Workouts</h3>
            <p>
              Record exercises, sets, reps, weights, and notes with a simple
              and intuitive interface.
            </p>
          </FeatureCard>

          <FeatureCard>
            <h3>Track Progress</h3>
            <p>
              View your workout history and monitor improvements across weeks,
              months, and years.
            </p>
          </FeatureCard>

          <FeatureCard>
            <h3>Analyze Performance</h3>
            <p>
              Understand trends in your training and identify opportunities for
              growth and improvement.
            </p>
          </FeatureCard>

          <FeatureCard>
            <h3>Reach Goals</h3>
            <p>
              Stay motivated, maintain consistency, and achieve your fitness
              milestones with confidence.
            </p>
          </FeatureCard>
        </FeatureGrid>
      </Section>

      <Section>
        <SectionTitle>Our Mission</SectionTitle>
        <Text>
          Our mission is to make fitness tracking simple, accessible, and
          effective. We believe that progress comes from consistency and that
          having clear data about your workouts helps you make better decisions
          in the gym.
        </Text>

        <Text>
          TrackLift is built to help users focus less on remembering workout
          details and more on achieving meaningful results. By providing
          accurate workout history and progress insights, we empower people to
          train smarter and stay committed to their fitness journey.
        </Text>
      </Section>

      <Section>
        <SectionTitle>Built for Every Fitness Level</SectionTitle>
        <Text>
          Whether your goal is building muscle, increasing strength, improving
          endurance, losing weight, or simply maintaining a healthy lifestyle,
          TrackLift adapts to your needs. Every workout is an opportunity to
          improve, and every improvement deserves to be tracked.
        </Text>
      </Section>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 80px 24px;
  color: #111;
  font-weight: 200;
`;

const Hero = styled.section`
  margin-bottom: 80px;
`;

const Title = styled.h1`
  font-size: clamp(3rem, 8vw, 5rem);
  font-weight: 600;
  margin-bottom: 24px;
`;

const Subtitle = styled.p`
  font-size: 2rem;
  line-height: 1.8;
  color: #555;
  max-width: 800px;
`;

const Section = styled.section`
  margin-bottom: 80px;
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 24px;
  font-weight: 600;
`;

const Text = styled.p`
  font-size: 1.1rem;
  line-height: 1.9;
  color: #555;
  margin-bottom: 20px;
`;

const FeatureGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 24px;
`;

const FeatureCard = styled.div`
  padding: 24px;
  border: 1px solid #eaeaea;
  border-radius: 16px;
  background: #fafafa;

  h3 {
    margin-bottom: 12px;
    font-size: 1.25rem;
  }

  p {
    color: #666;
    line-height: 1.7;
  }
`;