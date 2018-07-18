import React from 'react';
import SiteNavigator from '../components/SiteNavigator/SiteNavigator';
import HeroImage from '../components/HeroImage';
import HeroDescription from '../components/HeroDescription/HeroDescription';
import {
  CollapsibleComponent,
  CollapsibleHead,
  CollapsibleContent,
} from 'react-collapsible-component';

const PAGES = [
  {
    title: 'Home',
    link: '/',
  },
  {
    title: 'Getting Started',
    link: '/',
  },
  {
    title: 'About JTA',
    link: '/',
  },
];
const AboutJta = () => (
  <div>
    <SiteNavigator title="Getting Started" pages={PAGES} />
    <HeroImage />
    <HeroDescription
      title=""
      description="The information below will give you an overview on what the Junior Term Abroad Program is about, the requirements to take part in this program, the costs, as well as notable student experiences. We look forward to working with you as you plan an amazing experience abroad!"
    />
    <section className="section">
      <div className="container">
        <CollapsibleComponent>
          <CollapsibleHead className="additionalClassForHead">
            Head title 1
          </CollapsibleHead>
          <CollapsibleContent className="additionalClassForContent">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex{' '}
            </p>
          </CollapsibleContent>

          <CollapsibleHead isExpanded={true}>Head title 2</CollapsibleHead>
          <CollapsibleContent isExpanded={true}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </CollapsibleContent>

          <CollapsibleHead>Head title 3</CollapsibleHead>
          <CollapsibleContent>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.{' '}
            </p>
          </CollapsibleContent>
        </CollapsibleComponent>
      </div>
    </section>
  </div>
);

export default AboutJta;
