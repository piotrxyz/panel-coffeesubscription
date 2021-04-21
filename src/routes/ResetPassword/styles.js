import styled from 'styled-components';

export const PassResetForm = styled.form`
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

export const ResetInfo = styled.div`
  padding-bottom: 40px;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  margin: 40px 0 100px 0;

  @media screen and (min-width: ${({ theme }) => theme.tablet}) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 40px 0 80px 0;
  }
`;
