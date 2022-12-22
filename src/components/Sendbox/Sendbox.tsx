import React, { useState } from 'react';
import styles from './Sendbox.module.scss';
import '../../styles/fonts.scss';
import { Button } from '../Button/Button';
import { ButtonColors } from '../../enums/ButtonColors';
import { TextInput } from '../Input/TextInput';
import { Checkbox } from '../Checkbox/Checkbox';
import { Select } from '../Select/Select';

export const Sendbox = () => {
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

  const handleChangeSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const [value, setState] = React.useState('111');
    setState(e.target.value);
  };

  return (
    <div className={styles.app}>
      Awesome store app!!!
      <Button title='button1' color={ButtonColors.Primary} onClick={handleClick} />
      <Button title='button2' color={ButtonColors.Secondary} onClick={handleClick} />
      <TextInput placeholder='Insert text' onChange={handleChange} value={value} />
      <Checkbox handleChange={handleChangeA} isChecked={isCheckedA} label='A' />
      <Checkbox handleChange={handleChangeB} isChecked={isCheckedB} label='B' />
      <Select value='string1' onChange={handleChangeSelect} />
    </div>
  );
};
