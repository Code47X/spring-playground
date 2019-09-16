import styled from 'styled-components';
import { animated } from 'react-spring';

export const Modal = styled(animated.div)`
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
    overflow: hidden;
    border-radius: 5px;
    box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.5);
    width: 100%;
    max-width: 400px;

    .modal-title {
      width: 100%;
      background: #2e8ca5;
      padding: 10px 20px;
      font-family: ${props => props.theme.fonts.primary};
      font-style: normal;
      font-weight: normal;
      font-size: 2rem;
      color: white;
    }

    .modal-body {
      width: 100%;
      height: 100px;
      background: white;
      padding: 20px;
      font-family: ${props => props.theme.fonts.primary};
      font-style: normal;
      font-weight: normal;
      font-size: 1rem;
      color: black;
    }
`;
