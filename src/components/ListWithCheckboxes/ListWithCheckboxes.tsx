import React from 'react';
import classNames from 'classnames';
import styles from '../ListWithCheckboxes/ListWithCheckboxes.module.scss';
import { Mark } from '../../icons/icons';
import { ListWithCheckboxesProps } from '../../interfaces/ListWithCheckboxesProps';

export const ListWithCheckboxes = ({ label, isChecked, handleChange }: ListWithCheckboxesProps) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.inputWrapper}>
        <div className={styles.iconWrapper}>
          <Mark className={classNames(styles.icon, { [styles.iconChecked]: isChecked })} />
        </div>
        <input
          type='checkbox'
          id={label}
          checked={isChecked}
          onChange={handleChange}
          className={styles.checkbox}
        />
      </div>
      <label className={styles.label} htmlFor={label}>
        {label}
      </label>
    </div>
  );
};