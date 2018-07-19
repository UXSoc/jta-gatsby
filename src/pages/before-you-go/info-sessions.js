import React from 'react';
import SiteNavigator from '../../components/SiteNavigator/SiteNavigator';
import HeroImage from '../../components/HeroImage';

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
    title: 'Information Sessions and Talks',
    link: '/before-you-go/info-sessions',
  },
];
const InformationSessions = () => (
  <div>
    <SiteNavigator title="Information Sessions and Talks" pages={PAGES} />
    <HeroImage />
    <section className="section">
      <div className="container">
        <p>
          <strong>Cultural Sensitivity Lecture and Country Briefings</strong>
        </p>
        <p>
          Multiple sessions will be held to accommodate the large number of JTA
          participants. Each lecture session lasts from 1.5 to 2 hours. All JTA
          participants are required to attend all lectures and latecomers who
          are more than 15 minutes late will be marked absent. Clearance to
          leave for the destination countries shall only be issued if all
          sessions have been attended by the JTA participant. JTA participants
          must sign up in advance for the desired session schedule to ensure
          availability of slots. Slots will be given out on a first-come,
          first-served basis.
        </p>
        <br />
        <p>
          <strong>Information Sessions</strong>
        </p>
        <p>
          To view all schedules for talks and lecture, click <a href="#">here</a>.
        </p>
      </div>
    </section>
  </div>
);

export default InformationSessions;
