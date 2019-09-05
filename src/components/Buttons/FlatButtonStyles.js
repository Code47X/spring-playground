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

const FlatButtonBase = styled(Button)`
  width: 100%;
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  color: white;
  padding: 10px 20px;
  border: 1px solid white;
`;

export const FlatButton = animated(FlatButtonBase);

export const FlatButtonSheen = styled(animated.div)`
  position: absolute;
  top: 25%;
  left: -80%;
  width: 100%;
  height: 50%;
  background: #a7a7a78c;
  transform: rotateZ(-45deg);
`;
