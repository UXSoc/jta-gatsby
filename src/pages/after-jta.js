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
    title: 'After JTA',
    link: '/after-jta',
  },
];
const AfterJta = () => (
  <div>
    <SiteNavigator title="After JTA" pages={PAGES} />
    <HeroImage />
    <HeroDescription
      title=""
      description="The JTA Program enables students to return to the ATeneo and share their unique experiences and developed global consciousness with the entire community. As such, we have provided students with platforms to share their experiences abroad, such as sharing photos and volunteering to be a speaker. Additionally, JTA students must complete the Post-JTA requirements as clearance."
    />
    <section className="section">
      <div className="container">
        <CollapsibleLinks />
      </div>
    </section>
  </div>
);

export default AfterJta;
