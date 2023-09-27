import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Button, THEME_BTN } from '@/shared/ui/Button/ui/Button';
import { Text } from '@/shared/ui/Text/Text';
import { getProfileReadonly, profileActions, updateProfileData } from '@/entities/Profile';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import styles from './ProfilePageHeader.module.scss';

export const ProfilePageHeader = memo(() => {
  const { t } = useTranslation('profile');

  const dispatch = useAppDispatch();
  const readonly = useSelector(getProfileReadonly);

  const onEditBtnClick = useCallback(() => {
    dispatch(profileActions.setReadonly(false));
  }, [dispatch]);
  const onCancelEditBtnClick = useCallback(() => {
    dispatch(profileActions.cancelEdit());
  }, [dispatch]);
  const onSaveEditedForm = useCallback(() => {
    dispatch(updateProfileData());
  }, [dispatch]);

  return (
    <div className={styles.header}>
      <Text title={t('profile.page')} />
      {readonly ? (
        <Button onClick={onEditBtnClick} theme={THEME_BTN.OUTLINE}>
          {t('edit')}
        </Button>
      ) : (
        <div className={styles.btnGroup}>
          <Button onClick={onSaveEditedForm} theme={THEME_BTN.OUTLINE}>
            {t('save')}
          </Button>
          <Button onClick={onCancelEditBtnClick} theme={THEME_BTN.OUTLINE_WARN}>
            {t('cancel')}
          </Button>
        </div>
      )}
    </div>
  );
});
