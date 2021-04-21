/* eslint-disable no-undef */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import {
  TabsContainer,
  TabsBarStyled,
  ContentContainer,
  SideContainer,
  TabsStyled,
  TabStyled,
  BoxStyled
} from './styles';
import Heading from '../../components/Heading';
import Header from '../../components/Header';
import Navigation from '../../components/Navigation';
import SideNavigation from '../../components/SideNavigation';
import Main from '../../components/Main';
import SectionHeader from '../../components/SectionHeader';
import Footer from '../../components/Footer';
import CourierDeliveryForm from '../../components/Forms/CourierDeliveryForm';
import InPostLockersDeliveryForm from '../../components/Forms/InPostLockersDeliveryForm';
import SelfPickupForm from '../../components/Forms/SelfPickupForm';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`nav-tabpanel-${index}`}
      aria-labelledby={`nav-tab-${index}`}
      {...other}
    >
      {value === index && (
        <BoxStyled p={3}>
          <Typography component="div">{children}</Typography>
        </BoxStyled>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  // children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

function a11yProps(index) {
  return {
    id: `nav-tab-${index}`,
    'aria-controls': `nav-tabpanel-${index}`
  };
}

function LinkTab(props) {
  return (
    <TabStyled
      component="a"
      onClick={(event) => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}

function NavTabs() {
  const [value, setValue] = useState(0);
  const handleChange = (_, newValue) => {
    setValue(newValue);
  };

  const handleReloadMap = () => {
    setTimeout(() => {
      easyPack.init({
        defaultLocale: 'pl',
        mapType: 'osm',
        searchType: 'osm',
        points: {
          types: ['parcel_locker']
        },
        map: {
          initialTypes: ['parcel_locker']
        }
      });
      easyPack.mapWidget('easypack-map', (point) => {
        // eslint-disable-next-line no-alert
        alert(point.name);
        console.log(point.name, point.address.line1, point.address.line2);
      });
    }, 100);
  };

  return (
    <TabsContainer>
      <TabsBarStyled position="static">
        <TabsStyled
          variant="fullWidth"
          value={value}
          onChange={handleChange}
          aria-label="nav tabs"
        >
          <LinkTab label="Przesyłka kurierska" {...a11yProps(0)} />
          <LinkTab
            onClick={handleReloadMap}
            label="Paczkomaty InPost"
            {...a11yProps(1)}
          />
          <LinkTab label="Odbiór osobisty" {...a11yProps(2)} />
        </TabsStyled>
      </TabsBarStyled>
      {/* Przesyłka kurierska */}
      <TabPanel value={value} index={0}>
        <CourierDeliveryForm />
      </TabPanel>
      {/* Paczkomaty InPost */}
      <TabPanel value={value} index={1}>
        <InPostLockersDeliveryForm />
      </TabPanel>
      {/* Odbiór osobisty */}
      <TabPanel value={value} index={2}>
        <SelfPickupForm />
      </TabPanel>
    </TabsContainer>
  );
}

function ShippingInfo() {
  return (
    <>
      <Header />
      <Navigation />
      <Main>
        <SectionHeader>
          <Heading title="Wybór metody dostawy" />
        </SectionHeader>
        <ContentContainer>
          <SideNavigation />
          <SideContainer>
            <NavTabs />
          </SideContainer>
        </ContentContainer>
      </Main>
      <Footer />
    </>
  );
}

export default ShippingInfo;
