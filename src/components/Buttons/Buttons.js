import React from 'react';
import * as FlatButtons from './FlatButtons'

export const FlatButton = ({ text, onClick, variant }) => {
  switch (variant) {
    case 'sheen':
      return <FlatButtons.Sheen text={text} onClick={onClick} />
    case 'morph':
      return <FlatButtons.Morph text={text} onClick={onClick} />
    default:
      return <FlatButtons.Sheen text={text} onClick={onClick} />
  };
};
