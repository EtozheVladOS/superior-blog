import styles from './ThemeSwitcher.module.scss';
import { useTheme } from '@/app/providers/ThemeProvider';
import { classNames } from '@/shared/lib/className';
import ThemeIcon from '@/shared/assets/icons/theme-mode.svg'
import { Button, THEME_BTN } from '@/shared/ui/Button/ui/Button';

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
  const { toggleTheme } = useTheme();

  return (
    <Button
      className={classNames(styles.themeSwitcher, {}, [className])}
      onClick={toggleTheme}
      theme={THEME_BTN.CLEAR}
    >
      <ThemeIcon className={styles.svg} />
    </Button>
  );
};
