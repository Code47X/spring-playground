import styled from 'styled-components';
import { animated } from 'react-spring';

export const ButtonWrapper = styled.button`
  padding: 0;
  background: none;
  border: none;
  cursor: pointer;

  :focus {
    outline: none;
  };

  -webkit-tap-highlight-color: transparent;
`;

export const ModalButton = styled(animated.div)`
  position: relative;
  font-family: ${props => props.theme.fonts.primary};
  font-style: normal;
  font-weight: bold;
  font-size: 1rem;
  padding: 5px 10px;
  overflow: hidden;

  &.confirm {
    color: #2e8ca5;
    border: 1px solid #2e8ca5;
  }

  &.cancel {
    color: #b72525;
    border: 1px solid #b72525;
  }
`;
