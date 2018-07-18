import React from 'react';
import SiteNavigator from '../components/SiteNavigator/SiteNavigator';
import HeroImage from '../components/HeroImage';
import HeroDescription from '../components/HeroDescription/HeroDescription';
import CollapsibleLinks from '../components/CollapsibleLinks';

const PAGES = [
  {
    title: 'Home',
    link: '/',
  },
  {
    title: 'How To Apply',
    link: '/how-to-apply',
  },
];
const HowToApply = () => (
  <div>
    <SiteNavigator title="How To Apply" pages={PAGES} />
    <HeroImage />
    <HeroDescription
      title=""
      description="Students planning to participate in the Junior Term Abroad Program will find that a lot of planning and preparation must take place in order to get accepted into the program and accomplish all the requirements. With this, we have provided you with step by step instructions, files, and checklists in this website in order to ease the application process."
    />
    <section className="section">
      <div className="container">
        <CollapsibleLinks />
      </div>
    </section>
  </div>
);

export default HowToApply;
