import styled from 'styled-components';

export const SetPassForm = styled.form`
  display: flex;
  flex-direction: column;
  padding: 50px 10px;
  width: 80%;
  border-bottom: 1px solid black 100%;

  @media screen and (min-width: ${({ theme }) => theme.tablet}) {
    width: 45%;
  }

  @media screen and (min-width: ${({ theme }) => theme.desktopSm}) {
    width: 400px;
  }
`;

export const SetInfo = styled.div``;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: 40px;
`;
