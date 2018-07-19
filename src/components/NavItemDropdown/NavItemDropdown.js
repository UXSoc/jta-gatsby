import React from 'react';
import PropTypes from 'prop-types';

const NavItemDropdown = props => (
  <a className="navbar-item has-dropdown is-hoverable">
    <a href={props.titleLink} className="navbar-link">{props.navTitle}</a>
    <div className="navbar-dropdown">
      {props.dropdownItems.map((name, index) => {
        return (
          <a href={name.url} className="navbar-item" key={index}>
            {name.title}
          </a>
        );
      })}
    </div>
  </a>
);

NavItemDropdown.propTypes = {
  navTitle: PropTypes.string,
  titleLink: PropTypes.string,
  dropdownItems: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      url: PropTypes.string,
    })
  ),
};

export default NavItemDropdown;
