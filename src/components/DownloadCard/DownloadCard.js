import React from 'react';
import PropTypes from 'prop-types';

const DownloadCard = props => (
  <div className="columns">
    <div className="column">
      <div className="card">
        <header className="card-header">
          <p className="card-header-title">{props.title}</p>
        </header>
        <div className="card-content">
          <div className="content">
            {props.links.map((name, index) => {
              return (
                <p key={index}>
                  <a className="name" href={name.link}>
                    {name.title}
                  </a>
                </p>
              );
            })}
          </div>
        </div>
        <footer className="card-footer">
          <a href={props.download_link} className="card-footer-item">
            Download All
          </a>
        </footer>
      </div>
    </div>
  </div>
);

DownloadCard.propTypes = {
  title: PropTypes.string,
  download_link: PropTypes.string,
  links: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      link: PropTypes.string,
    })
  ),
};

export default DownloadCard;
