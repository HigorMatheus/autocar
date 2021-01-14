import styled, { css } from "styled-components";

import Tooltip from "../Tooltip";

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrorred: boolean;
}
export const Container = styled.div<ContainerProps>`
  background: #232129;
  border-radius: 1rem;
  border: 0.2rem solid #232129;
  padding: 1.6rem;
  /* max-width: 35rem; */
  color: #636360;
  display: flex;
  align-items: center;
  & + div {
    margin-top: 0.8rem;
    margin-left: 0;
  }
  ${(props) =>
    props.isErrorred &&
    css`
      border-color: #c53030;
    `}
  ${(props) =>
    props.isFocused &&
    css`
      color: #ff9000;
      border-color: #ff9000;
    `}
  ${(props) =>
    props.isFilled &&
    css`
      color: #ff9000;
    `}
  input {
    color: #f4ede8;
    flex: 1;
    background: transparent;
    border: 0;
    &::placeholder {
      color: #636360;
    }
  }
  svg {
    margin-right: 1.6rem;
  }
`;

export const Error = styled(Tooltip)`
  height: 2rem;
  margin-left: 1.6rem;
  svg {
    margin: 0;
  }
  span {
    background: #c53030;
    color: #fff;
    &::before {
      border-color: #c53030 transparent;
    }
  }
`;
