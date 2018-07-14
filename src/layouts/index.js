import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import Navbar from '../components/Navbar';
import HeroBanner from '../components/HeroBanner';
import HeroImage from '../components/HeroImage';
import HeroDescription from '../components/HeroDescription';
import ProcessTimeline from '../components/ProcessTimeline';
import BulmaCard from '../components/BulmaCard';
import './index.scss';

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Gatsby Starter Bulma Storybook"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <Navbar />
    <HeroBanner />
    <HeroImage />
    <HeroDescription
      title="About the Junior Term Abroad Program"
      description="The Junior Term Abroad Program is an opportunity that allows juniors of the Ateneo to study abroad for one semester. Previous participants have described their study-abroad experiences as both academically enriching and personally rewarding, an important period of growth and discovery in their college lives. Participants are expected to be Ateneo's unofficial student-ambassadors, helping build our relationships with our partner institutions abroad."
    />
    <ProcessTimeline title="The Process" />
    <div className="section">
      <div className="container">
        <h4 className="title is-4">The Journey</h4>
        <div className="columns">
          <div className="column">
            <BulmaCard
              title="JTA Destinations & Universities"
              description="Some quick example text to build on the card title and make up the bulk of the card's content."
            />
          </div>
          <div className="column">
            <BulmaCard
              title="JTA Destinations & Universities"
              description="Some quick example text to build on the card title and make up the bulk of the card's content."
            />
          </div>
          <div className="column">
            <BulmaCard
              title="JTA Destinations & Universities"
              description="Some quick example text to build on the card title and make up the bulk of the card's content."
            />
          </div>
        </div>
      </div>
    </div>
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '0px 1.0875rem 1.45rem',
        paddingTop: 0,
      }}
    >
      {children()}
    </div>
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func,
};

export default TemplateWrapper;
