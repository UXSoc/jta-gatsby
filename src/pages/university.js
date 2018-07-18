import React from 'react';
import SiteNavigator from '../components/SiteNavigator/SiteNavigator';
import HeroImage from '../components/HeroImage';

const PAGES = [
  {
    title: 'Home',
    link: '/',
  },
  {
    title: 'Getting Started',
    link: '/about-jta',
  },
  {
    title: 'JTA Destinations and Universities',
    link: '/universities',
  },
];
const University = () => (
  <div>
    <SiteNavigator title="JTA Destinations and Universities" pages={PAGES} />
    <section className="section">
      <div className="container">
        <h2 className="title">Nanyang Technological University</h2>
        <HeroImage />
        <h2 className="title">About</h2>
        <div className="columns">
          <div className="column">
            <p>
              The Nanyang Technological Uniersity is an autonomous research
              uniersity in Singapore. NTU is consistently ranked amongst the
              world's best universities in all of the major college and
              uniersity rankings and is regarded as one of the top uniersities
              in the world. In the 2018 QS World University Rankings, NTU is
              ranked 11th in the world and 1st in Asia.
            </p>
            <p>
              The University has over 33,000 students. It is organized into
              eight colleges and schools. They are the College of Engineering,
              College of Science, College of Humanities, Arts and Social
              Sciences, Nanyang Business School, and the Lee Kong Chian School
              of Medicine, which was set up jointly with the Imperial College
              London.
            </p>
          </div>
          <div className="column">
            <p>
              <strong>Location: </strong>Singapore, Singapore
            </p>
            <p>
              <strong>Language: </strong>English
            </p>
            <p>
              <strong>Term Offered: </strong>First Semester Only
            </p>
            <p>
              <strong>Term Dates: </strong>August to December
            </p>
            <p>
              <strong>Areas of Study: </strong>Engineering, Business, Economics,
              Communication, Fine Arts
            </p>
            <p>
              <strong>Expected Expenses: </strong>$5000 to $10,000
            </p>
            <p>
              <strong>Areas of Study: </strong>Engineering, Business, Economics,
              Communication, Fine Arts
            </p>
            <p>
              <strong>Scholarships: </strong>TF-LEaRN Scholarship
            </p>
          </div>
        </div>
        <div className="columns">
          <div className="column">
            <h2 className="title">Related Links</h2>
            <p>
              <a>
                <span className="related-link">
                  Nanyang Technological University Official Website
                </span>
                <i className="fas fa-folder" />
              </a>
            </p>
            <p>
              <a>
                <span className="related-link">Travel Advice</span>
                <i className="fas fa-folder" />
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default University;
