import React from 'react';
import Header from '../../components/Header';
import Navigation from '../../components/Navigation';
import Main from '../../components/Main';
import Heading from '../../components/Heading';
import SideNavigation from '../../components/SideNavigation';
import Footer from '../../components/Footer';
import SectionHeader from '../../components/SectionHeader';
import ContentContainer from './styles';

function AffiliatePanel() {
  return (
    <>
      <Header />
      <Navigation />
      <Main>
        <SectionHeader>
          <Heading title="Panel afiliacyjny" />
        </SectionHeader>
        <ContentContainer>
          <SideNavigation />
        </ContentContainer>
      </Main>
      <Footer />
    </>
  );
}

export default AffiliatePanel;
