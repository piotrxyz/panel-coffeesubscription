import styled from 'styled-components';

export const ContentContainer = styled.div`
  width: 90%;

  @media (min-width: ${({ theme }) => theme.desktopSm}) {
    display: flex;
    max-width: 1110px;
    margin-top: 30px;
    margin-bottom: 30px;
  }
`;

export const SideContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: ${({ theme }) => theme.desktopSm}) {
    padding: 40px;
    border: 1px solid ${({ theme }) => theme.separatorColor};
    min-width: 680px;
    min-height: 520px;
    margin-left: 200px;
  }
`;

export const TextContainer = styled.div`
  padding-top: 20px;
  text-align: center;
  font-size: 18px;
  line-height: 22px;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding: 30px 0 30px 0;

  @media (min-width: ${({ theme }) => theme.tablet}) {
    flex-direction: row;
    width: 500px;
    margin: auto;
  }
`;
