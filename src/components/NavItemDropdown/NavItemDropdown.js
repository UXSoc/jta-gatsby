import React from 'react';
import PropTypes from 'prop-types';

const NavItemDropdown = props => (
  <a className="navbar-item has-dropdown is-hoverable">
    <a className="navbar-link">{props.navTitle}</a>
    <div className="navbar-dropdown">
      {props.dropdownItems.map((name, index) => {
        return (
          <a className="navbar-item" key={index}>
            {name}
          </a>
        );
      })}
    </div>
  </a>
);

NavItemDropdown.propTypes = {
  navTitle: PropTypes.string,
  dropdownItems: PropTypes.array,
};

export default NavItemDropdown;
