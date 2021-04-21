import styled from 'styled-components';
import Radio from '@material-ui/core/Radio';
import FormControl from '@material-ui/core/FormControl';

export const FormControlStyled = styled(FormControl)`
  && {
    width: 100%;
    align-items: center;

    @media (min-width: ${({ theme }) => theme.tablet}) {
      align-items: flex-start;
    }

    .MuiFormControlLabel-label {
      font-size: 14px;
      font-family: ${({ theme }) => theme.mainFontFamily};
      letter-spacing: 0;
      line-height: normal;
    }

    .MuiFormControlLabel-root {
      margin-right: 30px;
    }
  }
`;

export const Icon = styled.span`
  border-radius: 50%;
  border: 1px solid ${({ theme }) => theme.dividerColor};
  width: 16px;
  height: 16px;
  background-color: transparent;
`;

export const CheckedIcon = styled.span`
  height: 16px;
  width: 16px;
  border-radius: 50%;
  border: 1px solid ${({ theme }) => theme.dividerColor};
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;

  span {
    display: block;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.mainItemBgColor};
  }
`;

export const RadioStyled = styled(Radio)``;
