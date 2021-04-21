import React from 'react';
import Heading from '../../components/Heading';
import Header from '../../components/Header';
import Navigation from '../../components/Navigation';
import Main from '../../components/Main';
import Footer from '../../components/Footer';
import Button from '../../components/Button';
import SideNavigation from '../../components/SideNavigation';
import SectionHeader from '../../components/SectionHeader';
import {
  ContentContainer,
  SideContainer,
  ButtonsContainer,
  TextContainer
} from './styles';
import Table from './Table';

function OrderPanel() {
  return (
    <>
      <Header />
      <Navigation />
      <Main>
        <SectionHeader>
          <Heading title="Panel zamówień" />
        </SectionHeader>
        <ContentContainer>
          <SideNavigation />
          <SideContainer>
            <TextContainer>
              Status Twojego aktualnego zamówienia:
              <br />
              Oczekuje na zapłatę
            </TextContainer>
            <ButtonsContainer>
              <Button primary title="Opłać zamówienie" />
              <Button secondary title="Zmień zamówienie" />
            </ButtonsContainer>
            <Heading title="Historia zamówień" />
            <Table />
          </SideContainer>
        </ContentContainer>
      </Main>
      <Footer />
    </>
  );
}

export default OrderPanel;
