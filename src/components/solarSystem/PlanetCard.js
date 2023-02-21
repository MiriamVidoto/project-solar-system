import PropTypes from 'prop-types';
import React from 'react';
import StyledPlanetCard from './StyledPlanetCard';

class PlanetCard extends React.Component {
  render() {
    const { planetName, planetImage } = this.props;
    return (
      <StyledPlanetCard data-testid="planet-card">
        <img src={ planetImage } alt={ `Planeta ${planetName}` } />
        <h3 data-testid="planet-name">{ planetName }</h3>
      </StyledPlanetCard>
    );
  }
}

PlanetCard.propTypes = {
  planetName: PropTypes.string.isRequired,
  planetImage: PropTypes.string.isRequired,
};

export default PlanetCard;
