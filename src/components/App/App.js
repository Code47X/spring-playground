import React, { Fragment } from 'react';
import { FlatButton } from 'components/Buttons/Buttons';
import * as Styled from './AppStyles';
import 'utility/baseline.css';

const App = () => (
  <Fragment>
    <Styled.Header>
      <div>
        <h1 className='title'>
          React-Spring Playground
        </h1>
        <h2 className='subtitle'>
          A place to show off my animated components
        </h2>
      </div>
    </Styled.Header>
    <Styled.Section>
      <h3 className='title'>
        Buttons
      </h3>
      <div className='button-grid'>
        <FlatButton variant='default' text='Default' />
        <FlatButton variant='sheen' text='Sheen' />
      </div>
    </Styled.Section>
  </Fragment>
);

export default App;
