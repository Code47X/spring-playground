import styled from 'styled-components';
import { animated } from 'react-spring';

export const Modal = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
`;

export const ModalCard = styled(animated.div)`
    background: white;
    border-radius: 15px;
    box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.5);
    padding: 20px;
    width: 100%;
    max-width: 400px;
    text-align: center;
`;
