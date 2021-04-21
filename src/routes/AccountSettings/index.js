import React from 'react';
import { Form } from 'react-final-form';
import { Checkboxes } from 'mui-rff';
import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined';
import Heading from '../../components/Heading';
import Header from '../../components/Header';
import Navigation from '../../components/Navigation';
import Main from '../../components/Main';
import Footer from '../../components/Footer';
import SideNavigation from '../../components/SideNavigation';
import SectionHeader from '../../components/SectionHeader';
import {
  ContentContainer,
  TextContainer,
  SettingsContainer,
  SettingsSection,
  SettingsForm,
  SaveButton,
  SmsOutlinedIconStyled
} from './styles';

function AccountSettings() {
  const onSubmit = async (values) => {
    const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
    await sleep(1000);
    // eslint-disable-next-line no-alert
    window.alert(JSON.stringify(values, 0, 2));
    // eslint-disable-next-line no-console
    console.log('submitted', JSON.stringify(values, 0, 2));
  };

  return (
    <>
      <Header />
      <Navigation />
      <Main>
        <SectionHeader>
          <Heading title="Ustawienia konta" />
        </SectionHeader>
        <ContentContainer>
          <SideNavigation />
          <SettingsSection>
            <Form
              onSubmit={onSubmit}
              initialValues={{ email: false, sms: false }}
              render={({ handleSubmit, submitting, values }) => (
                <SettingsForm onSubmit={handleSubmit} noValidate>
                  <SettingsContainer>
                    <EmailOutlinedIcon />
                    <Checkboxes
                      name="email"
                      data={{ value: false }}
                      color="primary"
                    />
                    <TextContainer>
                      Chcę otrzymywać powiadomienia za pomocą wiadomości{' '}
                      <strong>E-mail</strong> na temat zamówień subskrypcji
                    </TextContainer>
                  </SettingsContainer>
                  <SettingsContainer>
                    <SmsOutlinedIconStyled />
                    <Checkboxes
                      name="sms"
                      data={{ value: false }}
                      color="primary"
                    />
                    <TextContainer>
                      Chcę otrzymywać powiadomienia za pomocą wiadomości{' '}
                      <strong>SMS</strong> na temat zamówień subskrypcji
                    </TextContainer>
                  </SettingsContainer>
                  <pre>{JSON.stringify(values, 0, 2)}</pre>
                  <SaveButton
                    primary
                    type="submit"
                    title="Zapisz"
                    disabled={submitting}
                    onClick={() => console.log('settings saved')}
                  />
                </SettingsForm>
              )}
            />
          </SettingsSection>
        </ContentContainer>
      </Main>
      <Footer />
    </>
  );
}

export default AccountSettings;
