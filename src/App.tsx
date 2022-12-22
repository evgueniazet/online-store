import React, { useState } from 'react';
import styles from './App.module.scss';
import './styles/fonts.scss';
import { Button } from './components/Button/Button';
import { ButtonColors } from './enums/ButtonColors';
import { TextInput } from './components/Input/TextInput';
import { Checkbox } from './components/Checkbox/Checkbox';

const App = () => {
  const [value, setValue] = React.useState('123');
  const [isCheckedA, setIsCheckedA] = useState(false);
  const [isCheckedB, setIsCheckedB] = useState(false);

  const handleClick = (): void => {
    console.log('click');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setValue(e.target.value);
  };

  const handleChangeA = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsCheckedA(e.target.checked);
  };

  const handleChangeB = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsCheckedB(e.target.checked);
  };

  return (
    <div className={styles.app}>
      Awesome store app!!!
      <Button title='button1' color={ButtonColors.Primary} onClick={handleClick} />
      <Button title='button2' color={ButtonColors.Secondary} onClick={handleClick} />
      <TextInput placeholder='Insert text' onChange={handleChange} value={value} />
      <Checkbox handleChange={handleChangeA} isChecked={isCheckedA} label='A' />
      <Checkbox handleChange={handleChangeB} isChecked={isCheckedB} label='B' />
    </div>
  );
};

export default App;
