import { Suspense } from 'react';
import { Modal } from '@/shared/ui/Modal';
import { Spinner } from '@/shared/ui/Spinner';
import { LoginFormAsync } from '../LoginForm/LoginForm.async';

interface LoginModalProps {
  visible: boolean;
  onClose: () => void;
}

export const LoginModal = ({ visible, onClose }: LoginModalProps) => (
  <Modal
    visible={visible}
    onClose={onClose}
    lazy
  >
    <Suspense fallback={<Spinner />}>
      <LoginFormAsync />
    </Suspense>
  </Modal>
);
