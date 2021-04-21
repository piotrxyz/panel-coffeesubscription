import React from 'react';
import Header from '../../components/Header';
import Navigation from '../../components/Navigation';
import Main from '../../components/Main';
import Footer from '../../components/Footer';
import Heading from '../../components/Heading';
import SideNavigation from '../../components/SideNavigation';
import SectionHeader from '../../components/SectionHeader';
import { ContentContainer, TextContainer, SideContainer } from './styles';

function UserPanel() {
  return (
    <>
      <Header />
      <Navigation />
      <Main>
        <SectionHeader>
          <Heading title="Panel użytkownika" />
        </SectionHeader>
        <ContentContainer>
          <SideNavigation />
          <SideContainer>
            <Heading title="Heading" />
            <TextContainer>
              Z nami nie musisz martwić się, że wkrótce zabraknie Ci kawy.
              Każdego miesiąca dostarczymy Ci świeżo wypalone ziarna jakości
              <strong> SPECIALTY</strong> z najlepszych palarni zlokalizowanych
              w całej Europie! Do wyboru masz 3 pakiety -{' '}
              <strong>KLASYK</strong>, <strong>ODKRYWCA</strong>,{' '}
              <strong>KONESER</strong>. Wybierz, który najbardziej spełnia Twoje
              preferencje i oczekuj swojej paczki na początku każdego miesiąca!
              Daj nam się zaskoczyć - za każdym razem otrzymasz inną kawę! Nasza
              subskrypcja jest bardzo prosta i wygodna, a w każdej chwili możesz
              z niej zrezygnować! Bez zbędnych umów!
            </TextContainer>
          </SideContainer>
        </ContentContainer>
      </Main>
      <Footer />
    </>
  );
}

export default UserPanel;
