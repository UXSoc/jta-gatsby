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
    title: 'During JTA',
    link: '/during-jta',
  },
  {
    title: 'Frequently Asked Questions',
    link: '/during-jta/faqs',
  },
];
const Faqs = () => (
  <div>
    <SiteNavigator
      title="During JTA: Frequently Asked Questions"
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
