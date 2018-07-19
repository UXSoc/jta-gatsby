import React from 'react';
import SiteNavigator from '../../components/SiteNavigator/SiteNavigator';
import HeroImage from '../../components/HeroImage';

const PAGES = [
  {
    title: 'Home',
    link: '/',
  },
  {
    title: 'After JTA',
    link: '/after-jta',
  },
  {
    title: 'Post-JTA Requirements',
    link: '/after-jta/post-jta-requirements',
  },
];
const PostJtaRequirements = () => (
  <div>
    <SiteNavigator title="Post-JTA Requirements" pages={PAGES} />
    <HeroImage />
    <section className="section">
      <div className="container">
        <p>
          1. A printout of the Program of Study from the Learning Agreement duly
          signed by student's Ateneo department chairs, SOH JTA Coordinator (Sir
          Diccion), and the OIR representative from the destination university.
        </p>
        <br />
        <p>
          2. A copy of student's transcript of records from destination
          university, showing the student's marks. According to Ms. Suzie Andays
          of the OIR, the student should receive the transcript, usually by mail
          or at times in person before he or she leaves the destination
          university IN A SEALED ENVELOPE. The student should NOT OPEN this but
          should submit it to Ms. Suzie Andaya. There are times when the
          destination university directly mails a copy of the student's
          transcript to Ateneo OIR and/or Registrar's Office. OIR gives the
          studnet a photocopy of the transcript. The student then furnishes the
          JTA Coordinator with a copy.
        </p>
        <br />
        <p>
          3. A 100-200 word reflection essay and/or creative output expressing
          insights on the student's program of study abroad and his or her
          experiences as a student away from home. OIR requires a similar essay.
          It is possible to have the student submit the same essay to us. We are
          however encouraging students, especially under the Fine Arts and
          English departments, to consider submitting a creative output aside
          from the reflection essay.
        </p>
        <br />
        <p>
          4. An exit interview (15-30 minutes) with the JTA Coordinator.
        </p>
      </div>
    </section>
  </div>
);

export default PostJtaRequirements;
