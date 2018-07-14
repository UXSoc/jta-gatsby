import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';

const Downloadables = () => (
  <section className="section">
    <div className="container">
      <h4 className="title is-4">Downloadables</h4>
      <div className="columns">
        <div className="column">
          <Link to="/step-by-step" className="button is-fullwidth is-primary">Step by Step Procedure</Link>
        </div>
        <div className="column">
          <Link to="/forms" className="button is-fullwidth is-primary">Forms & Applications</Link>
        </div>
      </div>
      <div className="columns">
        <div className="column">
          <Link to="/checklist" className="button is-fullwidth is-primary">Application Checklist</Link>
        </div>
        <div className="column">
          <Link to="/predeparture" className="button is-fullwidth is-primary">Pre-Departure Requirements</Link>
        </div>
      </div>
    </div>
  </section>
);

Downloadables.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};

export default Downloadables;
