import { React, useState } from 'react';
import clsx from 'clsx';
import { useHistory } from 'react-router-dom';
import {
  makeStyles,
  InputLabel,
  InputAdornment,
  OutlinedInput,
  IconButton
} from '@material-ui/core';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import { Visibility, VisibilityOff } from '@material-ui/icons';
import Button from '../../components/Button';
import Main from '../../components/Main';
import { HeaderImg } from '../../components/Header';
import { SetPassForm, ButtonsContainer, SetInfo } from './styles';
import ROUTES from '../../constants/routesUrls';

const useStyles = makeStyles((theme) => ({
  margin: {
    marginTop: theme.spacing(4)
  },
  textField: {
    width: '100%'
  },
  padding: {
    paddingTop: '20px;'
  }
}));

function SetPass() {
  // TODO: Refactor ***
  // passwords matching is not working

  const history = useHistory();
  const [password, confirmPassword] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Hasła nie są zgodne'); // eslint-disable-line
      console.log(password !== confirmPassword); // eslint-disable-line
    } else {
      history.push(ROUTES.app);
    }
  };

  // Refactor ***

  const classes = useStyles();
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

  const [confirmValues, setConfirmValues] = useState({
    confirmPassword: '',
    showConfirmPassword: false
  });

  const handleConfirmChange = (prop) => (event) => {
    setConfirmValues({ ...confirmValues, [prop]: event.target.value });
  };

  const handleClickShowConfirmPassword = () => {
    setConfirmValues({
      ...confirmValues,
      showConfirmPassword: !confirmValues.showConfirmPassword
    });
  };

  const handleMouseDownConfirmPassword = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <Main center>
        <HeaderImg />
        <SetPassForm onSubmit={handleSubmit}>
          <SetInfo>Podaj nowe hasło</SetInfo>
          <InputLabel htmlFor="password" className={clsx(classes.margin)}>
            HASŁO
          </InputLabel>
          <OutlinedInput
            className={clsx(classes.textField)}
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
          <InputLabel
            htmlFor="confirmPassword"
            className={clsx(classes.margin)}
          >
            POWTÓRZ HASŁO
          </InputLabel>
          <OutlinedInput
            className={clsx(classes.textField)}
            type={confirmValues.showConfirmPassword ? 'text' : 'password'}
            value={confirmValues.confirmPassword}
            onChange={handleConfirmChange('confirmPassword')}
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
                  aria-label="toggle confirm password visibility"
                  onClick={handleClickShowConfirmPassword}
                  onMouseDown={handleMouseDownConfirmPassword}
                  edge="end"
                >
                  {confirmValues.showConfirmPassword ? (
                    <Visibility />
                  ) : (
                    <VisibilityOff />
                  )}
                </IconButton>
              </InputAdornment>
            }
          />
          <ButtonsContainer>
            <Button title="USTAW NOWE HASŁO &gt;" type="submit" />
          </ButtonsContainer>
        </SetPassForm>
      </Main>
    </>
  );
}

export default SetPass;
