import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { InputLabel, InputAdornment, OutlinedInput } from '@material-ui/core';
import AccountCircle from '@material-ui/icons/AccountCircle';
import cogoToast from 'cogo-toast';
import Button from '../../components/Button';
import Main from '../../components/Main';
import { HeaderImg } from '../../components/Header';
import { PassResetForm, ButtonsContainer, ResetInfo } from './styles';
import ROUTES from '../../constants/routesUrls';

function ResetPass() {
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    cogoToast.loading('Wysyłanie...').then(() => {
      cogoToast.success('Email z linkiem do resetu hasła został wysłany');
    });
    setTimeout(() => {
      history.push(ROUTES.app);
    }, 3000);
  };

  return (
    <>
      <Main center>
        <HeaderImg />
        <PassResetForm onSubmit={handleSubmit}>
          <ResetInfo>
            Na podany adres mailowy otrzymasz wiadomość email z linkiem do
            resetu hasła
          </ResetInfo>
          <InputLabel htmlFor="email address">ADRES EMAIL</InputLabel>
          <OutlinedInput
            id="input-with-icon-adornment"
            type="email"
            placeholder="ADRES EMAIL"
            autoComplete="false"
            required
            startAdornment={
              <InputAdornment position="start">
                <AccountCircle />
              </InputAdornment>
            }
          />
          <ButtonsContainer>
            <Link to={ROUTES.app}>&lt; ZALOGUJ</Link>
            <Button title="ZRESETUJ HASŁO &gt;" type="submit" />
          </ButtonsContainer>
        </PassResetForm>
      </Main>
    </>
  );
}

export default ResetPass;
