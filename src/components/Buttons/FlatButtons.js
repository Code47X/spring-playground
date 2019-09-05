import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import * as S from './FlatButtonStyles';

export const Sheen = ({ text, onClick }) => {
  const [hovered, setHovered] = useState(false);
  const [down, setDown] = useState(false);

  const sheenAnim = useSpring({
    left: hovered ? '80%' : '-80%',
    config: { mass: 1, tension: 280, friction: 40 }
  });

  const clickAnim = useSpring({
    transform: down ? 'scale(0.96)' : 'scale(1)',
    config: { mass: 1, tension: 500, friction: 15 }
  });

  return (
    <S.FlatButton
      style={clickAnim}
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => { setHovered(false); setDown(false); }}
      onMouseDown={() => setDown(true)}
      onMouseUp={() => setDown(false)}
    >
      {text}
      <S.FlatButtonSheen style={sheenAnim} />
    </S.FlatButton>
  );
};

export const Morph = ({ text, onClick }) => {
  const [hovered, setHovered] = useState(false);
  const [down, setDown] = useState(false);

  const clickAnim = useSpring({
    transform: down ? 'scale(0.96)' : 'scale(1)',
    config: { mass: 1, tension: 500, friction: 15 }
  });

  const morphAnim = useSpring({
    color: hovered ? 'red' : 'white',
    background: hovered ? 'white' : '#ffffff00',
    borderRadius: hovered ? '12px' : '0px',
  });

  return (
    <animated.div style={clickAnim}>
      <S.FlatButton
        style={morphAnim}
        onClick={onClick}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => { setHovered(false); setDown(false); }}
        onMouseDown={() => setDown(true)}
        onMouseUp={() => setDown(false)}
      >
        {text}
      </S.FlatButton>
    </animated.div>
  );
};
