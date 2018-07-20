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
    title: 'During JTA',
    link: '/during-jta',
  },
  {
    title: 'Adjusting to Life Abroad',
    link: '/during-jta/adjusting-to-life-abroad',
  },
];
const AdjustingToLifeAbroad = () => (
  <div>
    <SiteNavigator title="Adjusting to Life Abroad" pages={PAGES} />
    <HeroImage />
    <HeroDescription
      title=""
      description="Adjusting to life in the host country can be challenging and stressful. There will be new foods, unfamiliar behaviors, and often a different language. The level of the challenge and the amount of stress experienced will depend largely on each student's personality and their level of immersion in the host culture."
    />
    <section className="section">
      <div className="container">
        <CollapsibleLinks />
      </div>
    </section>
  </div>
);

export default AdjustingToLifeAbroad;
