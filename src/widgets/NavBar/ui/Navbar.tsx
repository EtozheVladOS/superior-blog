import styles from './Navbar.module.scss';
import { classNames } from "@/shared/lib/classNames/classNames";
import { AppLink } from '@/shared/ui/AppLink';
import { APP_LINK_THEME } from '@/shared/ui/AppLink/ui/AppLink';

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  return (
    <div className={classNames(styles.navbar, {}, [className])}>
      <div className={styles.links}>
        <AppLink to='/' theme={APP_LINK_THEME.INVERTED}>Главная</AppLink>
        <AppLink to='/about' theme={APP_LINK_THEME.INVERTED}>О сайте</AppLink>
      </div>
    </div>
  );
};



