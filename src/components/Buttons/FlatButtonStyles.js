import styled from 'styled-components';
import { animated } from 'react-spring';
import { ReactComponent as circleSvg } from 'svg/circle.svg';
import { ReactComponent as sliceLeftSvg } from 'svg/slice-left.svg';
import { ReactComponent as sliceRightSvg } from 'svg/slice-right.svg';

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
  font-family: ${props => props.theme.fonts.primary};
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
  background: purple;
`;

export const BarEffectBot = styled(animated.div)`
  width: 100%;
  height: 50%;
  position: absolute;
  bottom: 0;
  right: 0;
  z-index: -1;
  background: purple;
`;

export const CircleSvg = styled(circleSvg)`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0%;
  transform: translate3d(-50%, -50%, 0);
  z-index: -1;
  fill: purple;
`;

export const SliceLeftSvg = styled(sliceLeftSvg)`
  position: absolute;
  top: 0%;
  left: 0%;
  width: 61%;
  height: 100%;
  z-index: -1;
  fill: purple;
`;

export const SliceRightSvg = styled(sliceRightSvg)`
  position: absolute;
  bottom: 0%;
  right: 0%;
  width: 61%;
  height: 100%;
  z-index: -1;
  fill: purple;
`;
