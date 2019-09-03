import React from 'react';
import Card from 'components/Card/Card';
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
      <Styled.ContentContainer>
        <Styled.Flex>
          <Card title='Buttons'>
            <FlatButton text='Hover Me' />
          </Card>
        </Styled.Flex>
      </Styled.ContentContainer>
    </React.Fragment>
  );

};

export default App;
