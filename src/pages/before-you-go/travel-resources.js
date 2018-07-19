import React from 'react';
import SiteNavigator from '../../components/SiteNavigator/SiteNavigator';
import HeroImage from '../../components/HeroImage';
import HeroDescription from '../../components/HeroDescription/HeroDescription';
import CollapsibleLinks from '../../components/CollapsibleLinks';

const PAGES = [
  {
    title: 'Home',
    link: '/',
  },
  {
    title: 'Before You Go',
    link: '/before-you-go',
  },
  {
    title: 'Travel Resources',
    link: '/before-you-go/travel-resources',
  },
];
const TravelResources = () => (
  <div>
    <SiteNavigator title="Travel Resources" pages={PAGES} />
    <HeroImage />
    <HeroDescription
      title=""
      description="This section of the Ateneo Junior Term Abroad website provides several travel tips, tricks, and resources that students can use while on JTA, from housing to communication to transportation, and even travel websites that are helpful in giving every student a wonderful JTA experience."
    />
    <section className="section">
      <div className="container">
        <CollapsibleLinks />
      </div>
    </section>
  </div>
);

export default TravelResources;
