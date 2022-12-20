import React from 'react';
import styles from '../ListWithCeckboxes/ListWithCeckboxes.module.scss';

interface CheckboxProps {
  isChecked: boolean;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  label: string;
}

export const Checkbox = ({ label, isChecked, handleChange }: CheckboxProps) => {
  return (
    <div className={styles.wrapper}>
      <input
        type='checkbox'
        id={label}
        checked={isChecked}
        onChange={handleChange}
      />
      <label className={styles.label} htmlFor={label}>
        {label}
      </label>
    </div>
  );
};
