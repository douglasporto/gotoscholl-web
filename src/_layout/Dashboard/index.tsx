import React from 'react';


import * as S from './styles';

const Dashboard: React.FC = ({ children }) => {
  return (
    <S.Wrapper>
      <h1>Layout Dashboard</h1>
      <S.Container>{children}</S.Container>
    </S.Wrapper>
  );
};

export default Dashboard;
