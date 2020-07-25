import styled from 'styled-components';
import { shade } from 'polished';
import * as V from '../../styles/variables';

const { themeColor } = V.Color;

export const Container = styled.button`
  background: var(--themeColor);
  color: #ffffff;
  height: 56px;
  border-radius: 10px;
  border: 0;
  padding: 0 16px;
  width: 100%;
  font-weight: 500;
  margin-top: 16px;
  transition: color ${V.Transition.default};
  &:hover {
    background: ${shade(0.2, themeColor)};
  }
`;
