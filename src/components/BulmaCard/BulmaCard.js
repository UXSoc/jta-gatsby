import React from 'react';
import PropTypes from 'prop-types';

const BulmaCard = props => (
  <div className="card">
    <div className="card-image">
      <figure className="image is-4by3">
        <img
          src="https://bulma.io/images/placeholders/1280x960.png"
          alt="Placeholder image"
        />
      </figure>
    </div>
    <div className="card-content">
      <div className="media">
        <div className="media-content">
          <p className="title is-4">{props.title}</p>
        </div>
      </div>
      <div className="content">{props.description}</div>
    </div>
  </div>
);

BulmaCard.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};

export default BulmaCard;
