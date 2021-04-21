import styled, { css } from 'styled-components';
import { InputLabel } from '@material-ui/core';
import Main from '../../components/Main';

export const MainStyled = styled(Main)`
  min-height: 100vh;
`;

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  padding: 50px 10px;
  width: 80%;
  border-bottom: 1px solid black 100%;

  @media (min-width: ${({ theme }) => theme.tablet}) {
    width: 400px;
  }
`;

export const InputLabelStyled = styled(InputLabel)`
  ${(props) =>
    props.margintop &&
    css`
      margin-top: 40px;
    `}
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  margin-top: 40px;

  @media (min-width: ${({ theme }) => theme.tablet}) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 40px;
  }
`;

export const RegisterLink = styled.a`
  margin-top: 20px;
  padding-top: 20px;
  text-align: center;
  border-top: 1px solid;
`;
