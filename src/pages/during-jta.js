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
    title: 'During JTA',
    link: '/during-jta',
  },
];
const DuringJta = () => (
  <div>
    <SiteNavigator title="During JTA" pages={PAGES} />
    <HeroImage />
    <HeroDescription
      title=""
      description="For many students, studying abroad is the highlight of their college career. It is a time to explore new places, new languages and new cultures. Included in this section is practical information about adjusting to the host culture and searching for jobs while abroad. We will also use this section to communicate with study abroad students. We hope that all our students enjoy their time abroad and keep in touch!"
    />
    <section className="section">
      <div className="container">
        <CollapsibleLinks />
      </div>
    </section>
  </div>
);

export default DuringJta;
