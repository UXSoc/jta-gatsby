import React from 'react';
import PropTypes from 'prop-types';
import HorizontalTimeline from 'react-horizontal-timeline';

const VALUES = ['01/01/2018', '02/02/2018', '03/03/2018', '04/04/2018'];
class ProcessTimeline extends React.Component {
  static propTypes = {
    content: PropTypes.arrayOf(PropTypes.object).isRequired,
  };
  state = { value: 0, previous: 0 };

  render() {
    return (
      <div className="section">
        <div className="container">
          <h4 className="title is-4">{this.props.title}</h4>
          <div className="columns">
            <div className="column">
              {/* Bounding box for the Timeline */}
              <div style={{ width: '100%', height: '100px', margin: '0 auto' }}>
                <HorizontalTimeline
                  index={this.state.value}
                  indexClick={index => {
                    this.setState({ value: index, previous: this.state.value });
                  }}
                  values={VALUES}
                  labelWidth={100}
                />
              </div>
              <div className="text-center">
                {/* any arbitrary component can go here */}
                {this.state.value}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

ProcessTimeline.propTypes = {
  title: PropTypes.string,
};

export default ProcessTimeline;
