import React, { useState } from 'react';
import { animated, useSpring } from 'react-spring';
import * as Styled from './HeaderStyles';

const Header = () => {
  const [reset, setReset] = useState(false);

  const waveAnim = useSpring({
    from: { transform: 'translate3d(0%, 0, 0)' },
    to: { transform: 'translate3d(-50%, 0, 0)' },
    config: { duration: 5000 },
    reset,
    onStart: () => setReset(false),
    onRest: () => setReset(true)
  })

  const AnimatedWaveLoop = animated(Styled.WaveLoopSvg);

  return (
    <Styled.Header>
      <Styled.Content>
        <h1>Spring Playground</h1>
        <h2>A collection of animated components built with react-spring</h2>
        <h2 className='tagline'>
          By: Tanner Hartwig
        </h2>
      </Styled.Content>
      <AnimatedWaveLoop style={waveAnim} />
    </Styled.Header>
  );
};

export default Header;
