import React from 'react';
import { FlatButton } from 'components/Buttons/Buttons';
import * as S from './AppStyles';
import 'utility/baseline.css';

const App = () => {

  return (
    <React.Fragment>
      <S.Header>
        <S.HeadContent>
          <S.Title>
            React-Spring Playground
          </S.Title>
          <S.SubTitle>
            A place to show off my animated components
          </S.SubTitle>
        </S.HeadContent>
      </S.Header>
      <S.Section>
        <h3>Buttons</h3>
        <S.ButtonGrid>
          <FlatButton text='Hover Me' />
          <FlatButton text='Hover Me' />
          <FlatButton text='Hover Me' />
          <FlatButton text='Hover Me' />
        </S.ButtonGrid>
        <S.ButtonGrid>
          <FlatButton text='Hover Me' />
          <FlatButton text='Hover Me' />
          <FlatButton text='Hover Me' />
          <FlatButton text='Hover Me' />
        </S.ButtonGrid>
      </S.Section>
      <S.Section>
        <h3>Modals</h3>
        <S.ButtonGrid>
          <FlatButton text='Modal 1' />
          <FlatButton text='Modal 2' />
        </S.ButtonGrid>
      </S.Section>
    </React.Fragment>
  );

};

export default App;
