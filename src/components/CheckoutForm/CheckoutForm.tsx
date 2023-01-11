import React from 'react';
import styles from '../CheckoutForm/CheckoutForm.module.scss';
import { TextInput } from '../Input/TextInput';
import { Button } from '../Button/Button';
import { ButtonColors } from '../../enums/ButtonColors';
import {CheckoutFormProps} from '../../types/Page';

export const CheckoutForm: React.FC<CheckoutFormProps> = ({ onConfirm }: CheckoutFormProps): JSX.Element => {
  const [name, setName] = React.useState<string>('');
  const [phoneNumber, setPhoneNumber] = React.useState<string>('');
  const [adress, setAdress] = React.useState<string>('');
  const [email, setEmail] = React.useState<string>('');
  const [cardNumber, setCardNumber] = React.useState<string>('');
  const [validThru, setValidThru] = React.useState<string>('');
  const [cvv, setCvv] = React.useState<string>('');

  const handleName = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setName(e.target.value);
  };

  const handlePhoneNumber = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setPhoneNumber(e.target.value);
  };

  const handleAdress = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setAdress(e.target.value);
  };

  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setEmail(e.target.value);
  };

  const handleCardNumber = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setCardNumber(e.target.value);
  };

  const handleValidThru = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setValidThru(e.target.value);
  };

  const handleCVV = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setCvv(e.target.value);
  };

  const handleConfirm = (): void => {
    onConfirm();
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.personalData}>
        <h3 className={styles.personalDataTitle}>Personal details</h3>
        <TextInput className={styles.personalDataInput} placeholder='Name' onChange={handleName} value={name} />
        <TextInput className={styles.personalDataInput} placeholder='Phone number' onChange={handlePhoneNumber} value={phoneNumber} />
        <TextInput className={styles.personalDataInput} placeholder='Delivery adress' onChange={handleAdress} value={adress} />
        <TextInput className={styles.personalDataInput} placeholder='Email' onChange={handleEmail} value={email} />
      </div>
      <div >
        <h3 className={styles.cardDataTitle}>Credit card details</h3>
        <div className={styles.creditCard}>
          <TextInput placeholder='Card number' onChange={handleCardNumber} value={cardNumber} />
          <div className={styles.cardData}>
            <div >
              <span>Valid:</span>
              <TextInput className={styles.dataInput} placeholder='Valid thru' onChange={handleValidThru} value={validThru} />
            </div>
            <div>
              <span>CVV:</span>
              <TextInput className={styles.dataInput} placeholder='Code' onChange={handleCVV} value={cvv} />
            </div>
          </div>
        </div>
      </div>
      <Button className={styles.button} title='Confirm' color={ButtonColors.Primary} onClick={handleConfirm} />
    </div>
  );
};
