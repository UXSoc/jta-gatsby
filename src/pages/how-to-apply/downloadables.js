import React from 'react';
import SiteNavigator from '../../components/SiteNavigator/SiteNavigator';
import DownloadCard from '../../components/DownloadCard/index';

const PAGES = [
  {
    title: 'Home',
    link: '/',
  },
  {
    title: 'How To Apply',
    link: '/how-to-apply',
  },
  {
    title: 'Downloadables',
    link: '/how-to-apply/downloadables',
  },
];
const JTA_APPLICATION_KIT = [
  {
    title: 'JTA Application Requirements',
    link: '/',
  },
  {
    title: 'JTA Recommendation Forms',
    link: '/',
  },
  {
    title: 'JTA General Application Form',
    link: '/',
  },
  {
    title: 'JTA ESAP Terms and Conditions',
    link: '/',
  },
  {
    title: 'JTA ASEP Terms and Conditions',
    link: '/',
  },
];
const PROCEDURE_AND_CHECKLIST = [
  {
    title: 'Step by Step Procedure',
    link: '/',
  },
  {
    title: 'Application Checklist',
    link: '/',
  },
];
const PREDEP_REQS = [
  {
    title: 'General Instructions',
    link: '/',
  },
  {
    title: 'Clearance to Leave Form',
    link: '/',
  },
  {
    title: 'Commitment Letter',
    link: '/',
  },
  {
    title: 'Ateneo Waiver',
    link: '/',
  },
  {
    title: 'Contact Detail Form',
    link: '/',
  },
  {
    title: 'VISA Status Report Form',
    link: '/',
  },
  {
    title: 'ISEP Fee Computation Form',
    link: '/',
  },
  {
    title: 'Turnover Report Form',
    link: '/',
  },
  {
    title: 'Learning Agreement',
    link: '/',
  },
];
const Downloadables = () => (
  <div>
    <SiteNavigator title="Downloadables" pages={PAGES} />
    <section className="section">
      <div className="container">
        <DownloadCard
          title="JTA Application Kit"
          links={JTA_APPLICATION_KIT}
          download_link="/"
        />
        <DownloadCard
          title="Procedure and Checklist"
          links={PROCEDURE_AND_CHECKLIST}
          download_link="/"
        />
        <DownloadCard
          title="Pre-Departure Requirements"
          links={PREDEP_REQS}
          download_link="/"
        />
      </div>
    </section>
  </div>
);

export default Downloadables;
