import { ReactNode } from 'react';
import styles from './Modal.module.scss';

type Props = {
  onClose: () => void;
  title: ReactNode;
  children: ReactNode;
};

function Modal({ title, onClose, children }: Props) {
  return (
    <div className={styles.modal}>
      <div className={styles.container}>
        <header className={styles.title}>
          {title}
          <span
            data-testid="modal-close-btn"
            className={styles.close}
            onClick={onClose}
          >
            <div>&times;</div>
          </span>
        </header>
        <div className={styles.content}>{children}</div>
      </div>
    </div>
  );
}

export default Modal;
