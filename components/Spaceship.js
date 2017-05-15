import React from 'react';

export default class Spaceship extends React.component {
  render() {
    return (
      <div>
        <h1>(this.props.name)</h1>
        <p>Speed: {this.props.speed}</p>
        <p>Has rockets: {this.props.hasRockets ? 'Yes' : 'No'}</p>
        <p>Colors: {this.props.colors.join(', ')}</p>
      </div>
    );
  }
}

Spaceship.defaultProps = {
  hasRockets = false;
  colors = ['black', 'red'],
};
