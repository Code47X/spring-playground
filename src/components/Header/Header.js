import React from 'react';
import * as Styled from './HeaderStyles';

const Header = () => (
  <Styled.Header>
    <Styled.Content>
      <h1>Spring Playground</h1>
      <h2>A collection of animated components built with react-spring</h2>
      <h2 className='tagline'>
        By: Tanner Hartwig
      </h2>
    </Styled.Content>
    <Styled.WaveSvg preserveAspectRatio='none' />
  </Styled.Header>
);

export default Header;
