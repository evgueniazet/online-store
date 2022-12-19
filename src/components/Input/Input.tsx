import React from 'react';
import styles from '../Input/Input.module.scss';
import { InputProps } from '../../interfaces/InputProps';

export const Input: React.FC<InputProps> = (props: InputProps) => (
  <input
    value={props.value}
    type='text'
    placeholder={props.placeholder}
    onChange={props.onChange}
    className={styles.input}
  />
);
