import { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './Navbar.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, THEME_BTN } from '@/shared/ui/Button/ui/Button';
import { LoginModal } from '@/features/AuthByUsername';

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation();
  const [authModalVisible, setAuthModalVisible] = useState(false);

  const toggleModalVisibility = useCallback(() => {
    setAuthModalVisible((prev) => !prev);
  }, []);

  return (
    <div className={classNames(styles.navbar, {}, [className])}>
      <div className={styles.links} />
      <Button
        theme={THEME_BTN.CLEAR_INVERTED}
        onClick={toggleModalVisibility}
      >
        {t('login')}
      </Button>
      <LoginModal visible={authModalVisible} onClose={toggleModalVisibility} />
    </div>
  );
};
