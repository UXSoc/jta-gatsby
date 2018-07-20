import React from 'react';
import SiteNavigator from '../../components/SiteNavigator/SiteNavigator';
import HeroImage from '../../components/HeroImage/index';
import HeroDescription from '../../components/HeroDescription/HeroDescription';
import CollapsibleLinks from '../../components/CollapsibleLinks/index';

const PAGES = [
  {
    title: 'Home',
    link: '/',
  },
  {
    title: 'Getting Started',
    link: '/getting-started/about-jta',
  },
  {
    title: 'Scholarships',
    link: '/getting-started/scholarships',
  },
];
const Scholarships = () => (
  <div>
    <SiteNavigator title="Scholarships" pages={PAGES} />
    <HeroImage />
    <HeroDescription
      title=""
      description="A variety of scholarships and grants are available for students seeking financial aid during their Junior Term Abroad. These grants, however, are competitive and are usually highly dependent on the applicant's academic performance, extracurricular activities, recommendation letters from professors and other similar qualifications. Below are a list of scholarships offered by our partner universities and their corresponding descriptions Applicatnts may consult with their JTA Coordinator and Office of International Relations should they be interested in applying for a scholarship."
    />
    <section className="section">
      <div className="container">
        <CollapsibleLinks />
      </div>
    </section>
  </div>
);

export default Scholarships;
