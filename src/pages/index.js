import React from 'react';
import HeroBanner from '../components/HeroBanner';
import HeroImage from '../components/HeroImage';
import HeroDescription from '../components/HeroDescription';
import BulmaCard from '../components/BulmaCard';
import Downloadables from '../components/Downloadables';
import Footer from '../components/Footer';
import GameInfo from '../resources/content';
import HorizontalTimelineContent from '../components/HorizontalTimelineContent/HorizontalTimelineContent';

class IndexPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: 0, previous: 0 };
  }

  componentWillMount() {
    this.data = GameInfo.map((game, index) => {
      return {
        date: game.date,
        component: (
          <div className="container" key={index}>
            <h1>{`The Elder Scrolls ${index + 1}:`}</h1>
            <h2>{game.subtitle}</h2>
            <hr />
            <p>{game.content}</p>
            <hr />
          </div>
        ),
      };
    });
  }
  render() {
    return (
      <div>
        <HeroBanner />
        <HeroImage />
        <HeroDescription
          title="About the Junior Term Abroad Program"
          description="The Junior Term Abroad Program is an opportunity that allows juniors of the Ateneo to study abroad for one semester. Previous participants have described their study-abroad experiences as both academically enriching and personally rewarding, an important period of growth and discovery in their college lives. Participants are expected to be Ateneo's unofficial student-ambassadors, helping build our relationships with our partner institutions abroad."
        />
        <HorizontalTimelineContent content={this.data} />
        <div className="section">
          <div className="container">
            <h4 className="title is-4">The Journey</h4>
            <div className="columns">
              <div className="column">
                <BulmaCard
                  title="JTA Destinations & Universities"
                  description="Some quick example text to build on the card title and make up the bulk of the card's content."
                />
              </div>
              <div className="column">
                <BulmaCard
                  title="JTA Destinations & Universities"
                  description="Some quick example text to build on the card title and make up the bulk of the card's content."
                />
              </div>
              <div className="column">
                <BulmaCard
                  title="JTA Destinations & Universities"
                  description="Some quick example text to build on the card title and make up the bulk of the card's content."
                />
              </div>
            </div>
          </div>
        </div>
        <Downloadables />
        <Footer />
      </div>
    );
  }
}

export default IndexPage;
