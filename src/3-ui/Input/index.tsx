import { InputHTMLAttributes } from 'react';

import styles from './Input.module.scss';

type Props = {
  label: string;
} & InputHTMLAttributes<HTMLInputElement>;

function Input({ label, ...rest }: Props) {
  return (
    <div className={styles.input}>
      <label htmlFor={rest.name}>{label}</label>
      <input {...rest} />
    </div>
  );
}

export default Input;
