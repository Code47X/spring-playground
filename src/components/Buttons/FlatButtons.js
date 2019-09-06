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

  return (
    <Styled.ButtonWrapper>
      <animated.div style={pressedAnim}>
        <Styled.FlatButton
          onClick={onClick}
          onMouseDown={() => setPressed(true)}
          onMouseUp={() => setPressed(false)}
          onMouseLeave={() => setPressed(false)}
        >
          {text}
        </Styled.FlatButton>
      </animated.div>
    </Styled.ButtonWrapper>
  );
};

// Sheen Flat Button
export const Sheen = ({ text, onClick }) => {
  const { setPressed, pressedAnim } = useButtonPress();
  const [hovered, setHovered] = useState(false);

  const sheenAnim = useSpring({
    left: hovered ? '80%' : '-80%',
    config: { mass: 1, tension: 90, friction: 20 }
  });

  return (
    <Styled.ButtonWrapper>
      <animated.div style={pressedAnim}>
        <Styled.FlatButton
          onClick={onClick}
          onMouseDown={() => setPressed(true)}
          onMouseUp={() => setPressed(false)}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => { setHovered(false); setPressed(false); }}
        >
          {text}
          <Styled.SheenEffect style={sheenAnim} />
        </Styled.FlatButton>
      </animated.div>
    </Styled.ButtonWrapper>
  );
};
