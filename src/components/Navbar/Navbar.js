import React from 'react';
import NavItemDropdown from '../NavItemDropdown';

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
          <a className="navbar-item" href="/">
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
            <NavItemDropdown
              navTitle="Getting Started"
              titleLink="/about-jta"
              dropdownItems={[
                {
                  title: 'About JTA',
                  url: '/about-jta',
                },
                {
                  title: 'Offered Destinations & Universities',
                  url: '/universities',
                },
                {
                  title: 'Scholarships',
                  url: '/scholarships',
                },
                {
                  title: 'FAQs',
                  url: '/getting-started/faqs',
                },
              ]}
            />
            <NavItemDropdown
              navTitle="How to Apply"
              titleLink="/how-to-apply"
              dropdownItems={[
                {
                  title: 'Step by Step Procedure',
                  url: '/application-procedure',
                },
                {
                  title: 'Downloadables',
                  url: '/downloadables',
                },
                {
                  title: 'FAQs',
                  url: '/how-to-apply/faqs',
                },
              ]}
            />
            <NavItemDropdown
              navTitle="Before You Go"
              titleLink="/before-you-go"
              dropdownItems={[
                {
                  title: 'Information Sessions and Talks',
                  url: '/before-you-go/info-sessions',
                },
                {
                  title: 'Passport, Visas, and Insurance',
                  url: '/before-you-go/passport-visa-insurance',
                },
                {
                  title: 'Travel Resources',
                  url: '/before-you-go/travel-resources',
                },
                {
                  title: 'Travel Database',
                  url: '#',
                },
                {
                  title: 'FAQs',
                  url: '#',
                },
              ]}
            />
            <NavItemDropdown
              navTitle="During JTA"
              titleLink="/during-jta"
              dropdownItems={[
                {
                  title: 'Adjusting to Life Abroad',
                  url: '/during-jta/adjusting-to-life-abroad',
                },
                {
                  title: 'Departmental Contacts',
                  url: '/during-jta/departmental-contacts',
                },
                {
                  title: 'Photo Gallery',
                  url: '#',
                },
                {
                  title: 'FAQs',
                  url: '/during-jta/faqs',
                },
              ]}
            />
            <NavItemDropdown
              navTitle="After JTA"
              titleLink="/after-jta"
              dropdownItems={[
                {
                  title: 'Post-JTA Requirements',
                  url: '/after-jta/post-jta-requirements',
                },
                {
                  title: 'JTA Exit Survey',
                  url: '#',
                },
                {
                  title: 'FAQs',
                  url: '#',
                },
              ]}
            />
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
