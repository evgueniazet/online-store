import React from 'react';
import classNames from 'classnames';
import styles from '../Input/TextInput.module.scss';
import { TextInputProps } from '../../interfaces/TextInputProps';

export const TextInput: React.FC<TextInputProps> = ({onChange, value, placeholder, className}: TextInputProps) => (
  <input
    value={value}
    type='text'
    placeholder={placeholder}
    onChange={onChange}
    className={classNames(styles.input, className)}
  />
);
