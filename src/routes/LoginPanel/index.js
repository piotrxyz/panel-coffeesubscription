import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { InputAdornment, OutlinedInput, IconButton } from '@material-ui/core';
import { Visibility, VisibilityOff, AccountCircle } from '@material-ui/icons';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import cogoToast from 'cogo-toast';
import Button from '../../components/Button';
import { HeaderImg } from '../../components/Header';
import {
  MainStyled,
  LoginForm,
  InputLabelStyled,
  ButtonsContainer,
  RegisterLink
} from './styles';
import ROUTES from '../../constants/routesUrls';

function LoginPanel() {
  const history = useHistory();
  const [values, setValues] = useState({
    password: '',
    showPassword: false
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    cogoToast.success('Zostałeś pomyślnie zalogowany');
    setTimeout(() => {
      history.push(ROUTES.home);
    }, 1500);
  };

  return (
    <>
      <MainStyled center>
        <div>
          <HeaderImg />
        </div>
        <LoginForm onSubmit={handleSubmit}>
          <InputLabelStyled htmlFor="email address">
            Adres e-mail
          </InputLabelStyled>
          <OutlinedInput
            id="userEmail"
            type="email"
            placeholder="Adres e-mail"
            autoComplete="false"
            required
            startAdornment={
              <InputAdornment position="start">
                <AccountCircle />
              </InputAdornment>
            }
          />
          <InputLabelStyled htmlFor="password" margintop="true">
            Hasło
          </InputLabelStyled>
          <OutlinedInput
            id="userPassword"
            type={values.showPassword ? 'text' : 'password'}
            value={values.password}
            onChange={handleChange('password')}
            placeholder="*********"
            autoComplete="false"
            required
            startAdornment={
              <InputAdornment position="start">
                <VpnKeyIcon />
              </InputAdornment>
            }
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
          />
          <ButtonsContainer>
            <Link to={ROUTES.resetPass}>Nie pamiętam hasła</Link>
            <Button title="Zaloguj" type="submit" />
          </ButtonsContainer>
          <RegisterLink
            rel="noopener noreferrer"
            target="_blank"
            href="https://subskrypcjakawy.pl/#survey"
          >
            Nie masz konta? Zamów swoją pierwszą paczkę!
          </RegisterLink>
        </LoginForm>
      </MainStyled>
    </>
  );
}

export default LoginPanel;
