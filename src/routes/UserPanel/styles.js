import styled from 'styled-components';

export const ContentContainer = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;

  @media (min-width: ${({ theme }) => theme.desktopSm}) {
    max-width: 1110px;
    flex-direction: row;
    margin-top: 30px;
    margin-bottom: 30px;
  }
`;

export const TextContainer = styled.div``;

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
