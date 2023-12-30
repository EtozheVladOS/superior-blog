import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import LangiageIcon from '@/shared/assets/icons/language.svg';
import { Button, THEME_BTN } from '@/shared/ui/Button';
import styles from './LangSwitcher.module.scss';

interface LangSwitcherProps {
  className?: string;
}

export const LangSwitcher = memo(({ className }: LangSwitcherProps) => {
  const { i18n } = useTranslation();

  const toggleLang = () => i18n.changeLanguage(
    i18n.language === 'ru' ? 'en' : 'ru',
  );

  return (
    <Button
      className={classNames(styles.langSwitcher, {}, [className])}
      onClick={toggleLang}
      theme={THEME_BTN.CLEAR}
    >
      <LangiageIcon className={styles.svg} />
    </Button>
  );
});
