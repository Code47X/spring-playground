import React from 'react';
import Header from 'components/Header/Header';
import { FlatButton } from 'components/Buttons/Buttons';
import Modal from 'components/Modal/Modal';
import * as Styled from './AppStyles';
import 'utility/baseline.css';

const App = () => (
  <>
    <Header />
    <Styled.Section>
      <h3 className='title'>
        Buttons
      </h3>
      <div className='button-grid'>
        <FlatButton variant='default' text='Default' />
        <FlatButton variant='sheen' text='Sheen' />
      </div>
    </Styled.Section>
    <Styled.Section>
      <h3 className='title'>
        Modals
      </h3>
      <div className='button-grid'>
        <Modal>
          <FlatButton variant='sheen' text='Modal' />
        </Modal>
      </div>
    </Styled.Section>
  </>
);

export default App;
