import { useTranslation } from 'react-i18next';
import { TEXT_THEMES, Text } from '@/shared/ui/Text/Text';
import { ConsoleInput } from '@/shared/ui/ConsoleInput';
import { getTextWithGrearetTnanSymbol } from
  '@/shared/utils/getTextWithGrearetTnanSymbol/getTextWithGrearetTnanSymbol';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Spinner } from '@/shared/ui/Spinner';
import { Avatar } from '@/shared/ui/Avatar/Avatar';
import { CurrencySelect, CURRENCY } from '@/entities/Currency';
import styles from './ProfileCard.module.scss';
import { Profile } from '../../model/types/profile';
import { COUNTRY, CountrySelect } from '@/entities/Country';

interface ProfileCardProps {
  className?: string;
  data?: Profile;
  isLoading?: boolean;
  error?: string;
  readonly?: boolean;
  onChangeFirstname?: (value?: string) => void;
  onChangeLastname?: (value?: string) => void;
  onChangeUsername?: (value?: string) => void;
  onChangeAge?: (value?: string) => void;
  onChangeCountry?: (value: COUNTRY) => void;
  onChangeCity?: (value?: string) => void;
  onChangeCurrency?: (value: CURRENCY) => void;
  onChangeAvatar?: (value?: string) => void;
}

export const ProfileCard = ({
  className,
  data,
  isLoading = false,
  error,
  readonly = true,
  onChangeFirstname,
  onChangeLastname,
  onChangeUsername,
  onChangeAge,
  onChangeCountry,
  onChangeCity,
  onChangeCurrency,
  onChangeAvatar,
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
        <div className={styles.avatarWrapper}>
          <Avatar src={data?.avatar} />
        </div>

        <ConsoleInput
          value={data?.username}
          onChange={onChangeUsername}
          placeholder={getTextWithGrearetTnanSymbol(t('input.username'))}
          wrapperClassName={styles.input}
          disabled={readonly}
        />
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
        <CountrySelect
          value={data?.country}
          onChange={onChangeCountry}
          label={getTextWithGrearetTnanSymbol(t('input.country'))}
          className={styles.input}
          disabled={readonly}
        />
        <ConsoleInput
          value={data?.city}
          onChange={onChangeCity}
          placeholder={getTextWithGrearetTnanSymbol(t('input.city'))}
          wrapperClassName={styles.input}
          disabled={readonly}
        />
        <CurrencySelect
          value={data?.currency}
          onChange={onChangeCurrency}
          label={getTextWithGrearetTnanSymbol(t('input.currency'))}
          className={styles.input}
          disabled={readonly}
        />
        <ConsoleInput
          value={data?.avatar}
          onChange={onChangeAvatar}
          placeholder={getTextWithGrearetTnanSymbol(t('input.avatar'))}
          wrapperClassName={styles.input}
          disabled={readonly}
        />
      </div>
    </div>
  );
};
