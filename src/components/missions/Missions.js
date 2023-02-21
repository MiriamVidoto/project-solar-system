import React from 'react';
import Title from '../Title';
import missions from '../../data/missions';
import MissionCard from './MissionCard';
import StyledMission from './StyledMission';

class Missions extends React.Component {
  render() {
    return (
      <>
        <Title headline="Missões" />
        <StyledMission>
          {
            missions.map(({ name, year, country, destination }) => (
              <MissionCard
                key={ name }
                name={ name }
                year={ year }
                country={ country }
                destination={ destination }
              />
            ))
          }
        </StyledMission>
      </>
    );
  }
}

export default Missions;
