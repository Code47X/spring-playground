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
      height: 150px;
      background: white;
      padding: 30px 20px;
      font-family: ${props => props.theme.fonts.primary};
      font-style: normal;
      font-weight: normal;
      font-size: 1.25rem;
      color: black;
    }

    .modal-footer {
      width: 100%;
      padding: 10px;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      background: #e2e2e2;

      .modal-button {
        margin-right: 10px;
      }

      .modal-button:last-child {
        margin: 0;
      }
    }
`;
