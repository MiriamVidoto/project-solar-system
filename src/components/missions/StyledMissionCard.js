import styled from 'styled-components';

const StyledMissionCard = styled.div`
  background-color: #161923;
  border-radius: 10px;
  box-shadow: 0px 0px 6px #EFEFED;
  color: #EFEFED;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 8px;
  padding: 12px;
  width: 18%;
  min-height: 20%;

    h3{
    font-size: 1rem;
  }

  p {
    font-size: .8rem;
  }

  @media (max-width: 1250px) {
    width: 40%;
  }

  @media (max-width: 768px) {
    width: 80%;
  }

`;

export default StyledMissionCard;
