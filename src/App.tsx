import React from 'react';
import styles from './App.module.scss';
import './styles/fonts.scss';
import { Button } from './components/Button/Button';
import { ButtonColors } from './enums/ButtonColors';
import { Input } from './components/Input/Input';

const App = () => {
  const [value, setValue] = React.useState('123');
  const handleClick = (): void => {
    console.log('click');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setValue(e.target.value);
  };

  return (
    <div className={styles.app}>
      Awesome store app!!!
      <Button title='button1' color={ButtonColors.Secondary} onClick={handleClick} />
      <Button title='button2' onClick={handleClick} />
      <Input placeholder='Insert text' onChange={handleChange} value={value} />
    </div>
  );
};

export default App;
