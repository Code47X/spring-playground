import React from 'react';
import * as FlatButtons from './FlatButtons';
import * as ModalButtons from './ModalButtons';

export const FlatButton = ({ text, onClick, variant }) => {
  switch (variant) {
    case 'bars':
      return <FlatButtons.Bars text={text} onClick={onClick} />
    case 'circle':
      return <FlatButtons.Circle text={text} onClick={onClick} />
    case 'slice':
      return <FlatButtons.Slice text={text} onClick={onClick} />
    default:
      return <FlatButtons.Default text={text} onClick={onClick} />
  };
};

export const ModalButton = ({ text, onClick, variant }) => {
  switch (variant) {
    case 'confirm':
      return <ModalButtons.Confirm text={text} onClick={onClick} />
    case 'cancel':
      return <ModalButtons.Cancel text={text} onClick={onClick} />
    default:
      return <ModalButtons.Confirm text={text} onClick={onClick} />
  };
};
