import styled from 'styled-components';

const StyledPlanetCard = styled.div`
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 2px;
  padding: 2px;
  width: 12%;

  img {
    width: 90%;
  }

  @media (max-width: 1250px) {
    width: 35%;
  }

  @media (max-width: 768px) {
    width: 40%;
  }
`;

export default StyledPlanetCard;
