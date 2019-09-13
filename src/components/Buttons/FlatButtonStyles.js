import styled from 'styled-components';
import { animated } from 'react-spring';
import { ReactComponent as circleSvg } from 'svg/circle.svg';

export const ButtonWrapper = styled.button`
  padding: 0;
  background: none;
  border: none;
  cursor: pointer;

  :focus {
    outline: none;
  };

  -webkit-tap-highlight-color: transparent;
`;

export const FlatButton = styled(animated.div)`
  position: relative;
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 1.25rem;
  color: purple;
  padding: 10px 20px;
  border: 1px solid purple;
  overflow: hidden;
`;

export const BarEffectTop = styled(animated.div)`
  width: 100%;
  height: 50%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  background: #8000806b;
`;

export const BarEffectBot = styled(animated.div)`
  width: 100%;
  height: 50%;
  position: absolute;
  bottom: 0;
  right: 0;
  z-index: -1;
  background: #8000806b;
`;

export const CircleSvg = styled(circleSvg)`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0%;
  transform: translate3d(-50%, -50%, 0);
  z-index: -1;
  fill: #8000806b;
`;
