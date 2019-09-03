import React from 'react';
import * as Styled from './CardStyles';

const Card = ({ title, children }) => {

  return (
    <Styled.Card>
      <Styled.Title>
        {title}
      </Styled.Title>
      {children}
    </Styled.Card>
  );

};

export default Card;
