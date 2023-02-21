import React from 'react';
import Header from './components/Header/Header';
import Missions from './components/missions/Missions';
import SolarSystem from './components/solarSystem/SolarSystem';
import GlobalStyle from './GlobalStyle';
import StyledMain from './components/StyledMain';

class App extends React.Component {
  render() {
    return (
      <>
        <GlobalStyle />
        <Header />
        <StyledMain>
          <SolarSystem />
          <Missions />
        </StyledMain>
      </>
    );
  }
}

export default App;
