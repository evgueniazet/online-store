import React, { useState } from 'react';
import styles from './Sendbox.module.scss';
import '../../styles/fonts.scss';
import { Button } from '../Button/Button';
import { ButtonColors } from '../../enums/ButtonColors';
import { TextInput } from '../Input/TextInput';
import { Checkbox } from '../Checkbox/Checkbox';
import { Select } from '../Select/Select';
import { SelectOption } from '../../interfaces/SelectOption';

const OPTIONS = [
  {
    value: '1',
    label: 'test 1',
  },
  {
    value: '2',
    label: 'test 2',
  },
  {
    value: '3',
    label: 'test 3',
  },
  {
    value: '4',
    label: 'test 4',
  },
];

export const Sendbox = () => {
  const [value, setValue] = React.useState('123');
  const [isCheckedA, setIsCheckedA] = useState(false);
  const [isCheckedB, setIsCheckedB] = useState(false);
  const [select, setSelect] = useState<SelectOption['value']>(OPTIONS[3].value);

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
    setSelect(e.target.value);
  };

  return (
    <div className={styles.app}>
      Awesome store app!!!
      <Button title='button1' color={ButtonColors.Primary} onClick={handleClick} />
      <Button title='button2' color={ButtonColors.Secondary} onClick={handleClick} />
      <TextInput placeholder='Insert text' onChange={handleChange} value={value} />
      <Checkbox handleChange={handleChangeA} isChecked={isCheckedA} label='A' />
      <Checkbox handleChange={handleChangeB} isChecked={isCheckedB} label='B' />
      <Select value={select} options={OPTIONS} onChange={handleChangeSelect} />
    </div>
  );
};
