import { useTranslation } from 'react-i18next';
import styles from './LangSwitcher.module.scss';
import { classNames } from '@/shared/lib/className';
import LangiageIcon from '@/shared/assets/icons/language.svg';
import { Button, THEME_BTN } from '@/shared/ui/Button/ui/Button';

interface LangSwitcherProps {
  className?: string;
}

export const LangSwitcher = ({ className }: LangSwitcherProps) => {
  const { i18n } = useTranslation();

  const toggleLang = () => i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');

  return (
    <Button
      className={classNames(styles.langSwitcher, {}, [className])}
      onClick={toggleLang}
      theme={THEME_BTN.CLEAR}
    >
      <LangiageIcon className={styles.svg} />
    </Button>
  );
};
