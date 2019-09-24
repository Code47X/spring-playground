import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { useTransition } from 'react-spring';
import { ModalButton } from 'components/Buttons/Buttons';
import * as Styled from './ModalStyles';

const Portal = ({ children }) => (
  ReactDOM.createPortal(children, document.getElementById('modal-portal'))
);

const Modal = ({ modalAnim, closeModal, pointerEvents }) => (
  <Styled.Modal
    style={{
      pointerEvents,
      background: modalAnim.bgA.to((bgA) => `rgba(0, 0, 0, ${bgA})`)
    }}
  >
    <Styled.ModalCard style={modalAnim}>
      <div className='modal-title'>
        Modal Title
      </div>
      <div className='modal-body'>
        Modal body
      </div>
      <div className='modal-footer'>
        <ModalButton variant='cancel' text='Cancel' onClick={closeModal} />
        <ModalButton variant='confirm' text='Confirm' onClick={closeModal} />
      </div>
    </Styled.ModalCard>
  </Styled.Modal>
);

const ModalWrapper = ({ alert, children }) => {
  const [open, setOpen] = useState(false);
  const openModal = () => setOpen(true);
  const closeModal = () => setOpen(false);
  const pointerEvents = open ? 'all' : 'none';

  const transition = useTransition(open ? [1] : [], null, {
    from: {
      bgA: 0,
      opacity: 0,
      transform: alert ? 'scale(0, 0)' : 'translate3d(0, -25%, 0)'
    },
    enter: {
      bgA: 0.5,
      opacity: 1,
      transform: alert ? 'scale(1, 1)' : 'translate3d(0, 0%, 0)',
      config: (key) => ({
        duration: key === 'bgA' ? 300 : key === 'opacity' ? 500 : undefined,
        friction: 12
      })
    },
    leave: {
      bgA: 0,
      opacity: 0,
      transform: alert ? 'scale(0, 0)' : 'translate3d(0, -25%, 0)',
      config: (key) => ({
        clamp: (key === 'transform' && alert) ? true : false,
        duration: key === 'bgA' ? 300 : key === 'opacity' ? 500 : undefined,
        friction: 15
      })
    },
    unique: true
  });

  return (
    <>
      {transition.map(
        ({ item, key, props: modalAnim }) =>
          <Portal key={key}>
            <Modal
              modalAnim={modalAnim}
              closeModal={closeModal}
              pointerEvents={pointerEvents}
            />
          </Portal>
      )}

      {React.cloneElement(children, { onClick: openModal })}
    </>
  );
};

export default ModalWrapper;
