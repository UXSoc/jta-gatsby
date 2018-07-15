import React from 'react';
import SiteNavigator from '../components/SiteNavigator/SiteNavigator';

const PAGES = [
  {
    title: 'Home',
    link: '/',
  },
  {
    title: 'Getting Started',
    link: '/',
  },
  {
    title: 'About JTA',
    link: '/',
  },
];
const AboutJta = () => (
  <div>
    <SiteNavigator title="Getting Started" pages={PAGES} />
  </div>
);

export default AboutJta;
