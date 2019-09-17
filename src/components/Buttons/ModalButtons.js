import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import * as Styled from './ModalButtonStyles';

// Button Press Hook
const useButtonPress = () => {
  const [pressed, setPressed] = useState(false);

  const pressedAnim = useSpring({
    transform: pressed ? 'scale(0.96)' : 'scale(1)',
    config: { mass: 1, tension: 500, friction: 15 }
  });

  return { pressed, setPressed, pressedAnim }
};

// Confirm Modal Button
export const Confirm = ({ text, onClick }) => {
  const { setPressed, pressedAnim } = useButtonPress();
  const [hovered, setHovered] = useState(false);

  const defaultAnim = useSpring({
    color: hovered ? 'white' : '#2e8ca5',
    background: hovered ? '#2e8ca5' : '#ffffff00',
    config: { tension: 180, clamp: true }
  })

  return (
    <Styled.ButtonWrapper className='modal-button'>
      <animated.div style={pressedAnim}>
        <Styled.ModalButton
          className='confirm'
          style={defaultAnim}
          onClick={onClick}
          onMouseDown={() => setPressed(true)}
          onMouseUp={() => setPressed(false)}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => { setHovered(false); setPressed(false); }}
        >
          {text}
        </Styled.ModalButton>
      </animated.div>
    </Styled.ButtonWrapper>
  );
};

// Cancel Modal Button
export const Cancel = ({ text, onClick }) => {
  const { setPressed, pressedAnim } = useButtonPress();
  const [hovered, setHovered] = useState(false);

  const defaultAnim = useSpring({
    color: hovered ? 'white' : '#b72525',
    background: hovered ? '#b72525' : '#ffffff00',
    config: { tension: 180, clamp: true }
  })

  return (
    <Styled.ButtonWrapper className='modal-button'>
      <animated.div style={pressedAnim}>
        <Styled.ModalButton
          className='cancel'
          style={defaultAnim}
          onClick={onClick}
          onMouseDown={() => setPressed(true)}
          onMouseUp={() => setPressed(false)}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => { setHovered(false); setPressed(false); }}
        >
          {text}
        </Styled.ModalButton>
      </animated.div>
    </Styled.ButtonWrapper>
  );
};
