import React from 'react';
import SiteNavigator from '../../components/SiteNavigator/SiteNavigator';
import HeroImage from '../../components/HeroImage';
import HeroDescription from '../../components/HeroDescription/HeroDescription';
import CollapsibleLinks from '../../components/CollapsibleLinks';

const PAGES = [
  {
    title: 'Home',
    link: '/',
  },
  {
    title: 'During JTA',
    link: '/during-jta',
  },
  {
    title: 'Departmental Contacts',
    link: '/during-jta/departmental-contacts',
  },
];
const DepartmentalContacts = () => (
  <div>
    <SiteNavigator title="Departmental Contacts" pages={PAGES} />
    <section className="section">
      <div className="container">
        <h4 className="title is-4">Office of International Relations</h4>
        <div className="columns">
          <div className="column">
            <div className="card">
              <div className="card-content">
                <div className="media">
                  <div className="media-left">
                    <figure className="image is-48x48">
                      <img
                        src="https://bulma.io/images/placeholders/96x96.png"
                        alt="Placeholder image"
                      />
                    </figure>
                  </div>
                  <div className="media-content">
                    <p className="title is-4">John Smith</p>
                    <p className="subtitle is-6">@johnsmith</p>
                  </div>
                </div>
                <div className="content">
                  <a href="mailto:director.oir@ateneo.edu">
                    director.oir@ateneo.edu
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="card">
              <div className="card-content">
                <div className="media">
                  <div className="media-left">
                    <figure className="image is-48x48">
                      <img
                        src="https://bulma.io/images/placeholders/96x96.png"
                        alt="Placeholder image"
                      />
                    </figure>
                  </div>
                  <div className="media-content">
                    <p className="title is-4">John Smith</p>
                    <p className="subtitle is-6">@johnsmith</p>
                  </div>
                </div>
                <div className="content">
                  <a href="mailto:director.oir@ateneo.edu">
                    director.oir@ateneo.edu
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="card">
              <div className="card-content">
                <div className="media">
                  <div className="media-left">
                    <figure className="image is-48x48">
                      <img
                        src="https://bulma.io/images/placeholders/96x96.png"
                        alt="Placeholder image"
                      />
                    </figure>
                  </div>
                  <div className="media-content">
                    <p className="title is-4">John Smith</p>
                    <p className="subtitle is-6">@johnsmith</p>
                  </div>
                </div>
                <div className="content">
                  <a href="mailto:director.oir@ateneo.edu">
                    director.oir@ateneo.edu
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default DepartmentalContacts;
