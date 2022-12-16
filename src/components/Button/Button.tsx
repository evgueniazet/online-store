import React from 'react';
import classNames from 'classnames';
import { ButtonColors } from '../../enums/ButtonColors';
import styles from './Button.module.scss';

interface ButtonProps {
  title: string;
  color?: string;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = (props) => {
  return (
    <button
      onClick={props.onClick}
      className={classNames(styles.button_primary, {
        [styles.button_secondary]: props.color === ButtonColors.Secondary,
      })}>
      {props.title}
    </button>
  );
};

export default Button;
