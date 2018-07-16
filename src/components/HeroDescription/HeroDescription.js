import React from 'react';
import PropTypes from 'prop-types';

const HeroDescription = props => (
  <section className="section">
    <div className="container">
      {props.title.length > 0 && <h4 className="title is-4">{props.title}</h4>}
      <p>{props.description}</p>
    </div>
  </section>
);

HeroDescription.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};

export default HeroDescription;
