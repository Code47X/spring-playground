import styled from 'styled-components';
import { animated } from 'react-spring';

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

export const SheenEffect = styled(animated.div)`
  pointer-events: none;
  position: absolute;
  top: 25%;
  left: -80%;
  width: 100%;
  height: 50%;
  background: #a7a7a78c;
  transform: rotateZ(-45deg);
`;
