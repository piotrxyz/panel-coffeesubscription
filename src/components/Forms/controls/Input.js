import styled from 'styled-components';
import { TextField } from 'mui-rff';

const Input = styled(TextField)`
  && {
    height: 100%;
    padding-bottom: 14px;
    padding-top: 16px;

    .MuiFormLabel-root {
      font-size: 14px;
    }

    .MuiOutlinedInput-input {
      font-size: 14px;
      padding: 18.5px 14px;
    }

    div {
      height: 40px;
    }

    /* Label text animation */
    .MuiInputLabel-outlined {
      transform: translate(14px, 28px) scale(1);
    }

    .MuiInputLabel-shrink {
      transform: translate(14px, 10px) scale(0.75);
      color: ${({ theme }) => theme.mainItemBgColor};
    }

    .Mui-focused fieldset {
      border-color: ${({ theme }) => theme.mainItemBgColor};
      border-width: 1px;
    }

    .MuiFormHelperText-contained {
      position: absolute;
      bottom: -4px;
    }
  }
`;

export default Input;
