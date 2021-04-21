import styled from 'styled-components';

const ContentContainer = styled.div`
  width: 90%;

  @media (min-width: ${({ theme }) => theme.desktopSm}) {
    display: flex;
    max-width: 1110px;
    justify-content: space-between;
    margin-top: 30px;
    margin-bottom: 30px;
  }
`;

export default ContentContainer;
