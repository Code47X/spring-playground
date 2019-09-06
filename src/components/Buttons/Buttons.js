import React from 'react';
import * as FlatButtons from './FlatButtons'

export const FlatButton = ({ text, onClick, variant }) => {
  switch (variant) {
    case 'sheen':
      return <FlatButtons.Sheen text={text} onClick={onClick} />
    default:
      return <FlatButtons.Default text={text} onClick={onClick} />
  };
};
