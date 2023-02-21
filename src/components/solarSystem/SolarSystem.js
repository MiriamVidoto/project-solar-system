import React from 'react';
import Title from '../Title';
import planets from '../../data/planets';
import PlanetCard from './PlanetCard';
import StyledSolarSystem from './StyledSolarSystem';

class SolarSystem extends React.Component {
  render() {
    return (
      <>
        <Title headline="Planetas" />
        <StyledSolarSystem>
          { planets.map(({ name, image }) => (
            <PlanetCard
              key={ name }
              planetName={ name }
              planetImage={ image }
            />
          ))}
        </StyledSolarSystem>
      </>
    );
  }
}

export default SolarSystem;
