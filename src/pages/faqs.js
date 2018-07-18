import React from 'react';
import SiteNavigator from '../components/SiteNavigator/SiteNavigator';
import HeroImage from '../components/HeroImage';
import CollapsibleLinks from '../components/CollapsibleLinks';

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
    link: '/faqs',
  },
];
const Faqs = () => (
  <div>
    <SiteNavigator title="Frequently Asked Questions" pages={PAGES} />
    <HeroImage />
    <section className="section">
      <div className="container">
        <CollapsibleLinks />
      </div>
    </section>
  </div>
);

export default Faqs;
