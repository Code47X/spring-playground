import styled from 'styled-components';
import { device } from 'utility/breakpoints';

export const Card = styled.div`
  width: 90%;
  margin: 150px auto;
  padding: 50px;
  background: white;
  border-radius: 20px;
  box-shadow: 5px 5px 15px rgba(0,0,0,0.5);

  @media ${device.sm} {
    width: 450px;
  }

  @media ${device.lg} {
    width: 800px;
  }

  .card-title {
    color: purple;
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 2.5rem;
    text-align: center;
    margin: 0;
    margin-bottom: 50px;
  }

  .button-grid {
    display: grid;
    justify-content: center;
    grid-template-columns: repeat(auto-fit, 150px);
    grid-gap: 20px;
  }
`;



