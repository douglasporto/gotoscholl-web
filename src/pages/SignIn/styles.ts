import styled, { keyframes } from 'styled-components';
import BackgroundImg from '../../assets/login-project-manager.png';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
  color: var(--text)
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 700px;
  img {
    width: 200px;
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
  form {
    margin: 80px;
    width: 340px;
    text-align: center;
    h1 {
      margin-bottom: 24px;
    }
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${BackgroundImg}) no-repeat center;
  background-size: cover;
`;
