import { useTranslation } from 'react-i18next';
import { TEXT_THEMES, Text } from '@/shared/ui/Text/Text';
import { ConsoleInput } from '@/shared/ui/ConsoleInput';
import { getTextWithGrearetTnanSymbol } from
  '@/shared/utils/getTextWithGrearetTnanSymbol/getTextWithGrearetTnanSymbol';
import styles from './ProfileCard.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Profile } from '../../model/types/profile';
import { Spinner } from '@/shared/ui/Spinner';

interface ProfileCardProps {
  className?: string;
  data?: Profile;
  isLoading?: boolean;
  error?: string;
  readonly?: boolean;
  onChangeFirstname?: (value?: string) => void;
  onChangeLastname?: (value?: string) => void;
  onChangeAge?: (value?: string) => void;
  onChangeCountry?: (value?: string) => void;
  onChangeCity?: (value?: string) => void;
  onChangeCurrency?: (value?: string) => void;
}

export const ProfileCard = ({
  className,
  data,
  isLoading = false,
  error,
  readonly = true,
  onChangeFirstname,
  onChangeLastname,
  onChangeAge,
  onChangeCountry,
  onChangeCity,
  onChangeCurrency,
}: ProfileCardProps) => {
  const { t } = useTranslation('profile');

  if (isLoading) {
    return (
      <div className={classNames(styles.profileCard, {}, [className, styles.loading])}>
        <Spinner />
      </div>
    );
  }

  if (error) {
    return (
      <div className={classNames(styles.profileCard, {}, [className, styles.error])}>
        <Text
          theme={TEXT_THEMES.ERROR}
          title={t('failFetch')}
          text={t('tryToRefetch')}
          textAlign="center"
        />
      </div>
    );
  }

  return (
    <div className={classNames(styles.profileCard, {}, [className])}>
      <div>
        <ConsoleInput
          value={data?.firstname}
          onChange={onChangeFirstname}
          placeholder={getTextWithGrearetTnanSymbol(t('input.firstname'))}
          wrapperClassName={styles.input}
          disabled={readonly}
        />
        <ConsoleInput
          value={data?.lastname}
          onChange={onChangeLastname}
          placeholder={getTextWithGrearetTnanSymbol(t('input.lastname'))}
          wrapperClassName={styles.input}
          disabled={readonly}
        />
        <ConsoleInput
          value={String(data?.age)}
          onChange={onChangeAge}
          placeholder={getTextWithGrearetTnanSymbol(t('input.age'))}
          wrapperClassName={styles.input}
          disabled={readonly}
        />
        <ConsoleInput
          value={data?.country}
          onChange={onChangeCountry}
          placeholder={getTextWithGrearetTnanSymbol(t('input.country'))}
          wrapperClassName={styles.input}
          disabled={readonly}
        />
        <ConsoleInput
          value={data?.city}
          onChange={onChangeCity}
          placeholder={getTextWithGrearetTnanSymbol(t('input.city'))}
          wrapperClassName={styles.input}
          disabled={readonly}
        />
        <ConsoleInput
          value={data?.currency}
          onChange={onChangeCurrency}
          placeholder={getTextWithGrearetTnanSymbol(t('input.currency'))}
          wrapperClassName={styles.input}
          disabled={readonly}
        />
      </div>
    </div>
  );
};
