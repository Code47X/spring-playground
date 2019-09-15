import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import * as Styled from './FlatButtonStyles';

// Button Press Hook
const useButtonPress = () => {
  const [pressed, setPressed] = useState(false);

  const pressedAnim = useSpring({
    transform: pressed ? 'scale(0.96)' : 'scale(1)',
    config: { mass: 1, tension: 500, friction: 15 }
  });

  return { pressed, setPressed, pressedAnim }
};

// Default Flat Button
export const Default = ({ text, onClick }) => {
  const { setPressed, pressedAnim } = useButtonPress();
  const [hovered, setHovered] = useState(false);

  const defaultAnim = useSpring({
    color: hovered ? 'white' : 'purple',
    background: hovered ? 'purple' : '#ffffff00',
    config: { tension: 180, clamp: true }
  })

  return (
    <Styled.ButtonWrapper>
      <animated.div style={pressedAnim}>
        <Styled.FlatButton
          style={defaultAnim}
          onClick={onClick}
          onMouseDown={() => setPressed(true)}
          onMouseUp={() => setPressed(false)}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => { setHovered(false); setPressed(false); }}
        >
          {text}
        </Styled.FlatButton>
      </animated.div>
    </Styled.ButtonWrapper>
  );
};

// Bars Flat Button
export const Bars = ({ text, onClick }) => {
  const { setPressed, pressedAnim } = useButtonPress();
  const [hovered, setHovered] = useState(false);

  const { color, topTransform, botTransform } = useSpring({
    color: hovered ? 'white' : 'purple',
    topTransform: hovered ? 'translate3d(0, 0, 0)' : 'translate3d(-100%, 0, 0)',
    botTransform: hovered ? 'translate3d(0, 0, 0)' : 'translate3d(100%, 0, 0)',
    config: { tension: 180, clamp: true }
  });

  return (
    <Styled.ButtonWrapper>
      <animated.div style={pressedAnim}>
        <Styled.FlatButton
          style={{ color }}
          onClick={onClick}
          onMouseDown={() => setPressed(true)}
          onMouseUp={() => setPressed(false)}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => { setHovered(false); setPressed(false); }}
        >
          {text}
          <Styled.BarEffectTop style={{ transform: topTransform }} />
          <Styled.BarEffectBot style={{ transform: botTransform }} />
        </Styled.FlatButton>
      </animated.div>
    </Styled.ButtonWrapper>
  );
};

// Circle Flat Button
export const Circle = ({ text, onClick }) => {
  const { setPressed, pressedAnim } = useButtonPress();
  const [hovered, setHovered] = useState(false);

  const { color, width } = useSpring({
    color: hovered ? 'white' : 'purple',
    width: hovered ? '110%' : '0%',
    config: { tension: 180, clamp: true }
  });

  const CircleEffect = animated(Styled.CircleSvg);

  return (
    <Styled.ButtonWrapper>
      <animated.div style={pressedAnim}>
        <Styled.FlatButton
          style={{ color }}
          onClick={onClick}
          onMouseDown={() => setPressed(true)}
          onMouseUp={() => setPressed(false)}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => { setHovered(false); setPressed(false); }}
        >
          {text}
          <CircleEffect style={{ width }} />
        </Styled.FlatButton>
      </animated.div>
    </Styled.ButtonWrapper>
  );
};

// Slice Flat Button
export const Slice = ({ text, onClick }) => {
  const { setPressed, pressedAnim } = useButtonPress();
  const [hovered, setHovered] = useState(false);

  const { color, sliceLeft, sliceRight } = useSpring({
    color: hovered ? 'white' : 'purple',
    sliceLeft: hovered ? 'translate3d(0%, 0, 0)' : 'translate3d(-100%, 0, 0)',
    sliceRight: hovered ? 'translate3d(0%, 0, 0)' : 'translate3d(100%, 0, 0)',
    config: { tension: 180, clamp: true }
  });

  const SliceLeftEffect = animated(Styled.SliceLeftSvg);
  const SliceRightEffect = animated(Styled.SliceRightSvg);

  return (
    <Styled.ButtonWrapper>
      <animated.div style={pressedAnim}>
        <Styled.FlatButton
          style={{ color }}
          onClick={onClick}
          onMouseDown={() => setPressed(true)}
          onMouseUp={() => setPressed(false)}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => { setHovered(false); setPressed(false); }}
        >
          {text}
          <SliceLeftEffect style={{ transform: sliceLeft }} />
          <SliceRightEffect style={{ transform: sliceRight }} />
        </Styled.FlatButton>
      </animated.div>
    </Styled.ButtonWrapper>
  );
};
