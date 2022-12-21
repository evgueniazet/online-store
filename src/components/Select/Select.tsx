import React from 'react';
import styles from './Select.module.scss';

interface SelectProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export const Select: React.FC<SelectProps>  = ({value, onChange}: SelectProps) => {
  return (
    <select className={styles.select}>
      <option className={styles.option} value={value}>{value}</option>
      <option className={styles.option} value={value}>{value}</option>
      <option className={styles.option} selected value={value}>
        {value}
      </option>
      <option className={styles.option} value={value}>{value}</option>
    </select>
  );
};
