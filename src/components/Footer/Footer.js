import React from 'react';
import PropTypes from 'prop-types';

const Footer = () => (
  <footer className="footer">
    <div className="container">
      <div className="columns">
        <div className="column">
          <h1 className="title">Contact Information</h1>
          <p>
            Office of International Relations<br />
            Room 304, 3rd Floor, Faber Hall<br />
            Ateneo de Manila University<br />
            Loyola Heights 1108<br />
            Quezon City, Philippines<br />
            Trunkline: (+632) 426-6001 local 4037, 4038<br />
            Tel/Fax: (+632) 426-5907, (+632) 927-4534<br />
            Email: <a href="mailto:oir@ateneo.edu">oir@ateneo.edu</a>
            <br />
            <br />
            made by the User Experience Society<br />
            Copyright 2018. All rights reserved.
          </p>
        </div>
        <div className="column">
          <h1 className="title">Connect With Us</h1>
        </div>
      </div>
    </div>
  </footer>
);

Footer.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};

export default Footer;
