import styled from 'styled-components';
// import { Checkboxes } from 'mui-rff';
import SmsOutlinedIcon from '@material-ui/icons/SmsOutlined';
import Button from '../../components/Button';

export const ContentContainer = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  margin-top: 50px;

  @media (min-width: ${({ theme }) => theme.desktopSm}) {
    max-width: 1110px;
    flex-direction: row;
    margin-top: 30px;
    margin-bottom: 30px;
  }
`;

export const SettingsSection = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: ${({ theme }) => theme.desktopSm}) {
    display: flex;
    margin-left: 200px;
    padding: 40px;
    border: 1px solid ${({ theme }) => theme.separatorColor};
    justify-content: center;
  }
`;

export const SettingsForm = styled.form`
  display: flex;
  flex-direction: column;
`;

// export const CheckboxesStyled = styled(Checkboxes)`
//   && {
//     .MuiSvgIcon-root {
//       fill: ${({ theme }) => theme.mainItemBgColor};
//     }
//   }
// `;

export const Icon = styled.span`
  width: 10px;
  height: 10px;
  font-size: 5px;
  border: 2px solid gray;
  border-radius: 1px;
  background-color: transparent;
`;

export const CheckedIcon = styled.span`
  width: 10px;
  height: 10px;
  font-size: 5px;
  content: '\2714';
  border: 2px solid gray;
  border-radius: 1px;
  background-color: ${({ theme }) => theme.mainItemBgColor};
`;

export const SettingsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px 0;
  margin-top: 30px;
`;

export const TextContainer = styled.div`
  font-size: 15px;
  margin-left: 15px;
  @media (min-width: ${({ theme }) => theme.desktopSm}) {
    width: 70%;
  }
`;

export const SaveButton = styled(Button)`
  font-weight: bold;
  align-self: center;
  margin-top: 30px;
`;

export const SmsOutlinedIconStyled = styled(SmsOutlinedIcon)`
  margin-top: 4px;
`;
