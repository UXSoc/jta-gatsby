import React from 'react';
import PropTypes from 'prop-types';

const SiteNavigator = props => (
  <div className="hero">
    <div className="hero-body">
      <div className="container">
        <div className="columns">
          <div className="column">
            <h2 className="title">{props.title}</h2>
            <div className="site-navigator">
              {props.pages.map((name, index) => {
                return (
                  <div className="page-link" key={index}>
                    <span className="link-icon">
                      <i className="fas fa-angle-right" />
                    </span>
                    <a className="name" href={name.link}>
                      {name.title}
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

SiteNavigator.propTypes = {
  title: PropTypes.string,
  pages: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      link: PropTypes.string,
    })
  ),
};

export default SiteNavigator;
