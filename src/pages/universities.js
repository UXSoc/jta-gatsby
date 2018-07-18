import React from 'react';
import SiteNavigator from '../components/SiteNavigator/SiteNavigator';

const PAGES = [
  {
    title: 'Home',
    link: '/',
  },
  {
    title: 'Getting Started',
    link: '/about-jta',
  },
  {
    title: 'JTA Destinations and Universities',
    link: '/universities',
  },
];
const Universities = () => (
  <div>
    <SiteNavigator title="JTA Destinations and Universities" pages={PAGES} />
    <section className="section">
      <div className="container">
        <div className="columns">
          <div className="column">
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
                  <div className="media-left">
                    <figure className="image is-48x48">
                      <img
                        src="https://bulma.io/images/placeholders/96x96.png"
                        alt="Placeholder image"
                      />
                    </figure>
                  </div>
                  <div className="media-content">
                    <p className="title is-4">
                      Nanyang Technological University
                    </p>
                    <p className="subtitle is-6">@NTUsg</p>
                  </div>
                </div>

                <div className="content">
                  Jump start your future at Nanyang Technological University
                  (NTU Singapore), ranked 11th globally and the world‘s top
                  young university.
                </div>
              </div>
            </div>
          </div>
          <div className="column">
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
                  <div className="media-left">
                    <figure className="image is-48x48">
                      <img
                        src="https://bulma.io/images/placeholders/96x96.png"
                        alt="Placeholder image"
                      />
                    </figure>
                  </div>
                  <div className="media-content">
                    <p className="title is-4">
                      Nanyang Technological University
                    </p>
                    <p className="subtitle is-6">@NTUsg</p>
                  </div>
                </div>

                <div className="content">
                  Jump start your future at Nanyang Technological University
                  (NTU Singapore), ranked 11th globally and the world‘s top
                  young university.
                </div>
              </div>
            </div>
          </div>
          <div className="column">
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
                  <div className="media-left">
                    <figure className="image is-48x48">
                      <img
                        src="https://bulma.io/images/placeholders/96x96.png"
                        alt="Placeholder image"
                      />
                    </figure>
                  </div>
                  <div className="media-content">
                    <p className="title is-4">
                      Nanyang Technological University
                    </p>
                    <p className="subtitle is-6">@NTUsg</p>
                  </div>
                </div>

                <div className="content">
                  Jump start your future at Nanyang Technological University
                  (NTU Singapore), ranked 11th globally and the world‘s top
                  young university.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default Universities;
