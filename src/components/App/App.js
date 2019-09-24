import React from 'react';
import Header from 'components/Header/Header';
import Card from 'components/Card/Card';
import { FlatButton } from 'components/Buttons/Buttons';
import Modal from 'components/Modal/Modal';
// import * as Styled from './AppStyles';
import { ThemeProvider } from 'styled-components';
import { theme } from 'utility/theme';
import 'utility/baseline.css';

const App = () => (
  <ThemeProvider theme={theme}>
    <>
      <Header />
      <main>
        <Card title='Buttons'>
          <div className='button-grid'>
            <FlatButton variant='default' text='Default' />
            <FlatButton variant='bars' text='Bars' />
            <FlatButton variant='circle' text='Circle' />
            <FlatButton variant='slice' text='Slice' />
          </div>
        </Card>
        <Card title='Modals'>
          <div className='button-grid'>
            <Modal>
              <FlatButton variant='circle' text='Notify' />
            </Modal>
            <Modal alert>
              <FlatButton variant='circle' text='Alert' />
            </Modal>
          </div>
        </Card>
      </main>
    </>
  </ThemeProvider>
);

export default App;
