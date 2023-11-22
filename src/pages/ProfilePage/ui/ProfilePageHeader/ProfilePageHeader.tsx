import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Button, THEME_BTN } from '@/shared/ui/Button/ui/Button';
import { Text } from '@/shared/ui/Text/Text';
import {
  getProfileData,
  getProfileReadonly,
  profileActions,
  updateProfileData,
} from '@/entities/Profile';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { getUserAuthData } from '@/entities/User/index';
import styles from './ProfilePageHeader.module.scss';

export const ProfilePageHeader = memo(() => {
  const { t } = useTranslation('profile');

  const dispatch = useAppDispatch();
  const readonly = useSelector(getProfileReadonly);
  const authData = useSelector(getUserAuthData);
  const profileData = useSelector(getProfileData);

  const canEdit = authData?.id !== undefined && authData?.id === profileData?.id;

  const onEditBtnClick = useCallback(() => {
    dispatch(profileActions.setReadonly(false));
  }, [dispatch]);
  const onCancelEditBtnClick = useCallback(() => {
    dispatch(profileActions.cancelEdit());
  }, [dispatch]);
  const onSaveEditedForm = useCallback(() => {
    if (profileData?.id !== undefined) {
      dispatch(updateProfileData());
    }
  }, [dispatch, profileData?.id]);

  return (
    <div className={styles.header}>
      <Text title={t('profile.page')} />
      {canEdit && (
        <div>
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
      )}
    </div>
  );
});
