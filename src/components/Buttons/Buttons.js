import React, { useState } from 'react';
import { useSpring } from 'react-spring';
import * as S from './ButtonStyles';

export const FlatButton = ({ text, onClick }) => {

  const [hovered, setHovered] = useState(false);

  const sheenAnim = useSpring({
    left: hovered ? '80%' : '-80%'
  });

  return (
    <S.FlatButton
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {text}
      <S.FlatButtonSheen style={sheenAnim} />
    </S.FlatButton>
  );

};
