import React from 'react';

class Navbar extends React.Component {
  constructor() {
    super();
    this.state = { active: false };
  }
  toggleClass() {
    const currentState = this.state.active;
    this.setState({ active: !currentState });
  }

  render() {
    return (
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a className="navbar-item" href="https://bulma.io">
            <img
              src="https://bulma.io/images/bulma-logo.png"
              alt="Bulma: a modern CSS framework based on Flexbox"
              width="112"
              height="28"
            />
          </a>

          <a
            role="button"
            className={
              this.state.active ? 'navbar-burger is-active' : 'navbar-burger'
            }
            aria-label="menu"
            aria-expanded="false"
            onClick={this.toggleClass.bind(this)}
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </a>
        </div>
        <div
          className={
            this.state.active ? 'navbar-menu is-active' : 'navbar-menu'
          }
          onClick={this.toggleClass.bind(this)}
        >
          <div className="navbar-start">
            <a className="navbar-item">Home</a>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
