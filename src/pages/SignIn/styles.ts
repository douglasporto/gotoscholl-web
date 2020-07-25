import styled, { keyframes } from 'styled-components';

import { Heading2 } from '../../styles/typography';

export const Container = styled.div`
  background: linear-gradient(
    307.01deg,
    #17177f 15.54%,
    rgba(3, 253, 253, 0) 115.71%
  );
  height: 100vh;
  display: flex;
  align-items: stretch;
  color: var(--text);
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  img {
    width: 200px;
    margin-bottom: -25px;
    z-index: 99;
  }
`;

export const Card = styled.div`
  display: flex;
  align-items: center;
  width: 340px;
  padding: 32px;
  background: var(--bg);
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  form {
    text-align: center;
    width: 100%;
    h1 {
      margin-top: 16px;
      margin-bottom: 32px;
      font-weight: bold;
      ${Heading2}
    }
  }
  a {
    color: var(--text);
  }
`;

const apperFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const AnimationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  animation: ${apperFromLeft} 1s;
`;
