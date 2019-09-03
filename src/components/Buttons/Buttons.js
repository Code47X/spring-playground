import React, { useState } from 'react';
import { useSpring } from 'react-spring';
import * as Styled from './ButtonStyles';

export const FlatButton = ({ text, onClick }) => {

  const [hovered, setHovered] = useState(false);

  const sheenAnim = useSpring({
    left: hovered ? '80%' : '-80%'
  });

  return (
    <Styled.FlatButton
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {text}
      <Styled.FlatButtonSheen style={sheenAnim} />
    </Styled.FlatButton>
  );

};
