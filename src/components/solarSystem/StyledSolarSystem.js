import styled from 'styled-components';

const StyledSolarSystem = styled.div`
  display: flex;
  justify-content: center;
  width: 80vw;
  min-height: 40wh;
  margin-top: 20px;
  margin-bottom: 20px;

  @media (max-width: 1250px) {
    flex-wrap: wrap;
  }

`;

export default StyledSolarSystem;
