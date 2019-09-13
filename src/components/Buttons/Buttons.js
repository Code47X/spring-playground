import React from 'react';
import * as FlatButtons from './FlatButtons'

export const FlatButton = ({ text, onClick, variant }) => {
  switch (variant) {
    case 'bars':
      return <FlatButtons.Bars text={text} onClick={onClick} />
    case 'circle':
      return <FlatButtons.Circle text={text} onClick={onClick} />
    default:
      return <FlatButtons.Default text={text} onClick={onClick} />
  };
};
