import React from 'react';
import styles from './App.module.scss';
import './styles/fonts.scss';
import Button from './components/Button/Button';
import { ButtonColors } from './enums/ButtonColors';

const App = () => {
  const handleClick = () => {
    console.log('click');
  };

  return (
    <div className={styles.app}>
      Awesome store app!!!
      <Button title='button1' color={ButtonColors.Primary} onClick={handleClick} />
      <Button title='button2' color={ButtonColors.Secondary} onClick={handleClick} />
    </div>
  );
};

export default App;
