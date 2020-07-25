import styled, { css } from 'styled-components';
import { Color } from '../../styles/variables';
import Tooltip from '../Tooltip';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
  background: var(--bgInput);
  border-radius: 10px;
  padding: 16px;
  width: 100%;
  display: flex;
  align-items: center;

  border: 1px solid var(--bgInput);
  color: #666360;

  & + div {
    margin-top: 8px;
  }

  ${(props) =>
    props.isErrored &&
    css`
      border-color: ${Color.errors};
    `}

  ${(props) =>
    props.isFocused &&
    css`
      color: var(--themeColor);
      border-color: var(--themeColor);
    `}

  ${(props) =>
    props.isFilled &&
    css`
      color: var(--themeColor);
    `}

  input {
    color: var(--bgInputTxt);
    flex: 1;
    border: 0;
    background: transparent;

    &::placeholder {
      color: #666360;
    }
  }
  svg {
    margin-right: 16px;
  }
`;

export const Error = styled(Tooltip)`
  height: 20px;
  margin-left: 16px;
  svg {
    margin: 0;
  }
  span {
    background: ${Color.errors};
    &::before {
      border-color: ${Color.errors} transparent;
    }
  }
`;
