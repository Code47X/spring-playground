import React from 'react';
import * as Styled from './AppStyles';
import 'utility/baseline.css';

const App = () => {
  return (
    <Styled.Header>
      <Styled.HeadContent>
        <Styled.Title>
          React-Spring Playground
        </Styled.Title>
        <Styled.SubTitle>
          A place to show off my component animations
        </Styled.SubTitle>
      </Styled.HeadContent>
    </Styled.Header>
  );
};

export default App;
