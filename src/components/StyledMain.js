import styled from 'styled-components';
import backgroundImage from '../images/background.png';

const StyledMain = styled.div`
  background-image: url(${backgroundImage});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  color: #fff;
  padding: 10px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  min-height: 90vh;
`;

export default StyledMain;
