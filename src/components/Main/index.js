import styled, { css } from 'styled-components';

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;

  @media (min-width: ${({ theme }) => theme.desktopSm}) {
    min-height: calc(100vh - 272px);
    padding: 0;
  }

  ${(props) =>
    props.center &&
    css`
      min-height: 100vh;
      justify-content: center;
    `}
`;

export default Main;
