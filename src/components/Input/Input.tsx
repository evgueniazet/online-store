import React from 'react';
import styles from '../Input/Input.module.scss';

interface InputProps {
  value: string;
  placeholder?: string;
  color?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input: React.FC<InputProps> = (props: InputProps) => (
  <input
    value={props.value}
    type='text'
    placeholder={props.placeholder}
    onChange={props.onChange}
    className={styles.input}
  />
);
