import React from 'react';
import Header from 'components/Header/Header';
import Card from 'components/Card/Card';
import { FlatButton } from 'components/Buttons/Buttons';
import Modal from 'components/Modal/Modal';
// import * as Styled from './AppStyles';
import 'utility/baseline.css';

const App = () => (
  <>
    <Header />
    <main>
      <Card title='Buttons'>
        <div className='button-grid'>
          <FlatButton variant='default' text='Default' />
          <FlatButton variant='sheen' text='Sheen' />
          <FlatButton variant='sheen' text='Sheen' />
          <FlatButton variant='sheen' text='Sheen' />
        </div>
      </Card>
      <Card title='Modals'>
        <div className='button-grid'>
          <Modal>
            <FlatButton variant='sheen' text='Notify' />
          </Modal>
          <Modal>
            <FlatButton variant='sheen' text='Alert' />
          </Modal>
        </div>
      </Card>
    </main>
  </>
);

export default App;
