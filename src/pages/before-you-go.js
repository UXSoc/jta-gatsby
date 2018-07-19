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
    title: 'Before You Go',
    link: '/before-you-go',
  },
];
const BeforeYouGo = () => (
  <div>
    <SiteNavigator title="Before You Go" pages={PAGES} />
    <HeroImage />
    <HeroDescription
      title=""
      description="Students planning to participate in the Junior Term Abroad Program will find that a lot of preparation needs to be done even after being accepted into the program. This includes attending the required talks and information sessions, accomplishing the pre-departure requirements, securing passport, VISA, and insurance-related documents, looking for housing overseas, and other arrangements. Preparing all these things before JTA ensures students of a happy, healthy, and safe experience."
    />
    <section className="section">
      <div className="container">
        <CollapsibleLinks />
      </div>
    </section>
  </div>
);

export default BeforeYouGo;
