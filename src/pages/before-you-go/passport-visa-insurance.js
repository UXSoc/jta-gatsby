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
    title: 'Passport, Visas, and Insurance',
    link: '/before-you-go/passport-visa-insurance',
  },
];
const PassportVisaInsurance = () => (
  <div>
    <SiteNavigator title="Passport, Visas, and Insurance" pages={PAGES} />
    <HeroImage />
    <HeroDescription
      title=""
      description="Passports, visas, and insurance are some of the most important things that every JTA student must prepare and apply for. Without the first two documents, spending a semester abroad is very unlikely while insurance ensures that students are provided with ample coverage in case any untoward incident occurs. Information on passports, visas, and insurance can be found below."
    />
    <section className="section">
      <div className="container">
        <CollapsibleLinks />
      </div>
    </section>
  </div>
);

export default PassportVisaInsurance;
