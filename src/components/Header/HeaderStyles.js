import styled from 'styled-components';
import { ReactComponent as waveSvg } from 'svg/wave.svg';
import { device } from 'utility/breakpoints';

export const Header = styled.div`
  position: relative;
  width: 100%;
  height: 700px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(156.18deg, #A521E3 27.38%, rgba(227, 80, 33, 0.69) 81.43%);
`;

export const Content = styled.div`
    position: relative;
    top: -5%;
    width: 90%;

    font-family: 'Montserrat', sans-serif;
    font-size: 2.5rem;
    color: white;

    @media ${device.sm} {
      font-size: 3rem;
      width: 85%;
      max-width: 582px;
    }

    @media ${device.lg} {
      font-size: 4rem;
      width: 80%;
      max-width: 1000px;
    }

    h1 {
      font-size: 1em;
      font-weight: bold;
      margin: 0;
      margin-bottom: 15px;
    }

    h2 {
      font-size: 0.4em;
      font-weight: normal;
      margin: 0;
    }

    .tagline {
      font-weight: bold;
      margin-top: 125px;
    }
`;

export const WaveSvg = styled(waveSvg)`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100px;
  fill: #8F98E5;

  @media ${device.lg} {
    height: 161px;
  }
`;
