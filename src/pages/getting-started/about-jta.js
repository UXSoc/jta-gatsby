import React from 'react';
import SiteNavigator from '../../components/SiteNavigator/SiteNavigator';
import HeroImage from '../../components/HeroImage/index';
import HeroDescription from '../../components/HeroDescription/HeroDescription';
import CollapsibleLinks from '../../components/CollapsibleLinks/index';

const PAGES = [
  {
    title: 'Home',
    link: '/',
  },
  {
    title: 'Getting Started',
    link: '/getting-started/about-jta',
  },
  {
    title: 'About JTA',
    link: '/getting-started/about-jta',
  },
];
const AboutJta = () => (
  <div>
    <SiteNavigator title="Getting Started" pages={PAGES} />
    <HeroImage />
    <HeroDescription
      title=""
      description="The information below will give you an overview on what the Junior Term Abroad Program is about, the requirements to take part in this program, the costs, as well as notable student experiences. We look forward to working with you as you plan an amazing experience abroad!"
    />
    <section className="section">
      <div className="container">
        <CollapsibleLinks />
      </div>
    </section>
  </div>
);

export default AboutJta;
