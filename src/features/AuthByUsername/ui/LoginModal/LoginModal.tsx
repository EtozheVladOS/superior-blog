import styles from './LoginModal.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Modal } from '@/shared/ui/Modal';
import { LoginForm } from '../LoginForm/LoginForm';

interface LoginModalProps {
  visible: boolean;
  onClose: () => void;
}

export const LoginModal = ({ visible, onClose }: LoginModalProps) => {
  console.log();

  return (
    <Modal
      className={classNames(styles.modal, {})}
      visible={visible}
      onClose={onClose}
      lazy
    >
      <LoginForm />
    </Modal>
  );
};
