'use client';

import React from 'react';
import styled from 'styled-components';
import Header from "@/components/Header";


export default function Login() {
  return (
    <>    
    <Wrapper>
      <LoginBox>
        <Title>Login</Title>

        <Input
          type="email"
          placeholder="Enter your email"
        />

        <Input
          type="password"
          placeholder="Enter your password"
        />

        <LoginButton>
          Login
        </LoginButton>
      </LoginBox>
    </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  font-family: var(--font-geist-mono);
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f4f7fb;
`;

const LoginBox = styled.div`

  width: 400px;
  padding: 40px;
  background: white;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  /* box-shadow: 0 10px 25px rgba(0,0,0,0.08); */
`;

const Title = styled.h1`
  text-align: center;
  font-size: 32px;
  font-weight: 500;
  color: #222;
`;

const Input = styled.input`
  font-family: var(--font-geist-mono);
  width: 100%;
  padding: 14px;
  border: 1px solid #dcdcdc;
  border-radius: 10px;
  font-size: 16px;
  outline: none;
  background: white;
  color: black;
  &:focus {
    border-color: #4f46e5;
  }
`;

const LoginButton = styled.button`
  font-family: var(--font-geist-mono);
  width: 100%;
  padding: 14px;
  border: none;
  border-radius: 10px;
  background: var(--primary);
  color: white;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: 0.2s;

  /* &:hover {
    background: #4338ca;
  } */
`;