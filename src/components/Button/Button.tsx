import React from 'react';
import classNames from 'classnames';
import { ButtonColors } from '../../enums/ButtonColors';
import styles from './Button.module.scss';

interface ButtonProps {
  title: string;
  color?: string;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ color, onClick, title }) => {
  const btnClass = classNames(
    styles.button,
    {
      [styles.button_secondary]: color === ButtonColors.Secondary,
    },
    {
      [styles.button_primary]: color === ButtonColors.Primary,
    },
  );

  return (
    <button onClick={onClick} className={btnClass}>
      {title}
    </button>
  );
};

export default Button;
