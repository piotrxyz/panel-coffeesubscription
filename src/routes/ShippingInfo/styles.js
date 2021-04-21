import styled from 'styled-components';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';

export const ContentContainer = styled.div`
  @media (min-width: ${({ theme }) => theme.tablet}) {
    display: flex;
  }

  @media (min-width: ${({ theme }) => theme.desktopSm}) {
    min-width: 1110px;
    max-width: 1110px;
    margin-top: 30px;
    margin-bottom: 30px;
  }
`;

export const TabsContainer = styled.div`
  padding: 20px 0;

  @media (min-width: ${({ theme }) => theme.tablet}) {
    max-width: 700px;
    padding: 0;
  }

  @media (min-width: ${({ theme }) => theme.desktopSm}) {
    max-width: 1100px;
  }
`;

export const TabsBarStyled = styled(AppBar)`
  && {
    background: transparent;
    color: black;
    box-shadow: none;
    font-family: ${({ theme }) => theme.mainFontFamily};

    @media (min-width: ${({ theme }) => theme.tablet}) {
      margin: 20px 0;
    }

    .MuiTabs-flexContainer {
      display: flex;
    }

    .MuiTab-wrapper {
      @media (max-width: ${({ theme }) => theme.tablet}) {
        font-size: 12px;
      }
    }

    .MuiTabs-indicator {
      background-color: ${({ theme }) => theme.separatorColor};
    }
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

export const TabsStyled = styled(Tabs)`
  && {
    .Mui-selected {
      color: ${({ theme }) => theme.mainItemBgColor};
      pointer-events: none;
    }
  }
`;

export const TabStyled = styled(Tab)`
  && {
    opacity: 1;
    text-transform: none;
    font-family: ${({ theme }) => theme.mainFontFamily};
  }
`;

export const BoxStyled = styled(Box)`
  && {
    padding: 20px 0;
    width: 80%;
    margin: auto;

    @media (min-width: ${({ theme }) => theme.tablet}) {
      padding: 0;
    }
  }
`;
