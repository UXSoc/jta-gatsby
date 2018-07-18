import React from 'react';
import SiteNavigator from '../../components/SiteNavigator/SiteNavigator';
import HeroImage from '../../components/HeroImage/index';
import CollapsibleLinks from '../../components/CollapsibleLinks/index';

const PAGES = [
  {
    title: 'Home',
    link: '/',
  },
  {
    title: 'Getting Started',
    link: '/about-jta',
  },
  {
    title: 'Frequently Asked Questions',
    link: '/getting-started/faqs',
  },
];
const Faqs = () => (
  <div>
    <SiteNavigator
      title="Getting Started: Frequently Asked Questions"
      pages={PAGES}
    />
    <HeroImage />
    <section className="section">
      <div className="container">
        <CollapsibleLinks />
      </div>
    </section>
  </div>
);

export default Faqs;
