import React from 'react';
import styles from '../Input/Input.module.scss';
import { InputProps } from '../../interfaces/InputProps';

export const Input: React.FC<InputProps> = ({onChange, value, placeholder}: InputProps) => (
  <input
    value={value}
    type='text'
    placeholder={placeholder}
    onChange={onChange}
    className={styles.input}
  />
);
