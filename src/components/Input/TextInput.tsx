import React from 'react';
import styles from '../Input/TextInput.module.scss';
import { TextInputProps } from '../../interfaces/TextInputProps';

export const TextInput: React.FC<TextInputProps> = ({onChange, value, placeholder}: TextInputProps) => (
  <input
    value={value}
    type='text'
    placeholder={placeholder}
    onChange={onChange}
    className={styles.input}
  />
);
