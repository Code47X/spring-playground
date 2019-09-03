import styled from 'styled-components';
import { animated } from 'react-spring';

export const Button = styled.button`
  cursor: pointer;
  position: relative;
  padding: 0;
  border: none;
  background: none;
  overflow: hidden;

  :focus {
    outline: none;
  };

  -webkit-tap-highlight-color: transparent;
`;

export const FlatButton = styled(Button)`
  font-family: 'Montserrat', sans-serif;
  font-size: 20px;
  color: white;
  padding: 10px 20px;
  border: 1px solid white;
`;

export const FlatButtonSheen = styled(animated.div)`
  position: absolute;
  top: 25%;
  left: -80%;
  width: 100%;
  height: 50%;
  background: #a7a7a78c;
  transform: rotateZ(-45deg);
`;
