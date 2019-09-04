import React from 'react';
import { FlatButton } from 'components/Buttons/Buttons';
import * as Styled from './AppStyles';
import 'utility/baseline.css';

const App = () => {

  return (
    <React.Fragment>
      <Styled.Header>
        <Styled.HeadContent>
          <Styled.Title>
            React-Spring Playground
          </Styled.Title>
          <Styled.SubTitle>
            A place to show off my animated components
          </Styled.SubTitle>
        </Styled.HeadContent>
      </Styled.Header>
      <Styled.Section>
        <h3>Buttons</h3>
        <Styled.ButtonGrid>
          <FlatButton text='Hover Me' />
          <FlatButton text='Hover Me' />
          <FlatButton text='Hover Me' />
          <FlatButton text='Hover Me' />
        </Styled.ButtonGrid>
        <Styled.ButtonGrid>
          <FlatButton text='Hover Me' />
          <FlatButton text='Hover Me' />
          <FlatButton text='Hover Me' />
          <FlatButton text='Hover Me' />
        </Styled.ButtonGrid>
      </Styled.Section>
      <Styled.Section>
        <h3>Modals</h3>
        <Styled.ButtonGrid>
          <FlatButton text='Modal 1' />
          <FlatButton text='Modal 2' />
        </Styled.ButtonGrid>
      </Styled.Section>
    </React.Fragment>
  );

};

export default App;
