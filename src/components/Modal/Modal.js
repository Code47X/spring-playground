import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { useTransition } from 'react-spring';
import * as Styled from './ModalStyles';

const Portal = ({ children }) => (
  ReactDOM.createPortal(children, document.getElementById('modal-portal'))
);

const Modal = ({ animation, closeModal }) => (
  <Styled.Modal onClick={closeModal}>
    <Styled.ModalCard style={animation}>
      <h1>I'm a Modal</h1>
    </Styled.ModalCard>
  </Styled.Modal>
);

const ModalWrapper = ({ children }) => {
  const [open, setOpen] = useState(false);

  const transition = useTransition(open, null, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });

  return (
    <>
      {transition.map(
        ({ item, key, props: animation }) =>
          item &&
          <Portal key={key}>
            <Modal animation={animation} closeModal={() => setOpen(false)} />
          </Portal>
      )}
      {React.cloneElement(children, { onClick: () => setOpen(true) })}
    </>
  );
};

export default ModalWrapper;
