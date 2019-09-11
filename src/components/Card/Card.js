import React from 'react';
import * as Styled from './CardStyles';

const Card = ({ title, children }) => (
  <Styled.Card>
    <h2 className='card-title'>
      {title}
    </h2>
    {children}
  </Styled.Card>
);

export default Card;
