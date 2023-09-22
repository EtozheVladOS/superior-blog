import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Text } from '@/shared/ui/Text/Text';
import { Button, THEME_BTN } from '@/shared/ui/Button/ui/Button';
import { ConsoleInput } from '@/shared/ui/ConsoleInput';
import styles from './ProfileCard.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import { getProfileData } from '../../model/selectors/getProfileData/getProfileData';
import { getProfileIsLoadnig } from '../../model/selectors/getProfileIsLoading/getProfileLoading';
import { getProfileError } from '../../model/selectors/getProfileError/getProfileError';

interface ProfileCardProps {
  className?: string;
}

export const ProfileCard = ({ className }: ProfileCardProps) => {
  const { t } = useTranslation('profile');
  const profileData = useSelector(getProfileData);
  const profileIsLoading = useSelector(getProfileIsLoadnig);
  const profileError = useSelector(getProfileError);

  const getPlaceholderText = (text: string) => `${text}>`;

  return (
    <div className={classNames(styles.profileCard, {}, [className])}>
      <div className={styles.header}>
        <Text title={t('profile.page')} />
        <Button theme={THEME_BTN.OUTLINE}>
          {t('edit')}
        </Button>
      </div>

      <div>
        <ConsoleInput
          value={profileData?.firstname}
          placeholder={getPlaceholderText(t('profile.firstname'))}
          wrapperClassName={styles.input}
          disabled
        />
        <ConsoleInput
          value={profileData?.lastname}
          placeholder={getPlaceholderText(t('input.lastname'))}
          wrapperClassName={styles.input}
          disabled
        />
      </div>
    </div>
  );
};
