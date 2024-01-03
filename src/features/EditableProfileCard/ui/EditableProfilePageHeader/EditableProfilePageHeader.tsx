import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { HStack } from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/Text/Text';
import { Button, THEME_BTN } from '@/shared/ui/Button';
import { getUserAuthData } from '@/entities/User';

import { getProfileData } from '../../model/selectors/getProfileData/getProfileData';
import { getProfileReadonly } from '../../model/selectors/getProfileReadonly/getProfileReadonly';
import { profileActions } from '../../model/slice/profileSlice';
import { updateProfileData } from '../../model/services/updateProfileData/updateProfileData';
import cl from './EditableProfilePageHeader.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';

interface EditableProfilePageHeaderProps {
  className?: string;
}

export const EditableProfilePageHeader = memo(({ className }: EditableProfilePageHeaderProps) => {
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
    <HStack justify="between" className={classNames(cl.header, {}, [className])}>
      <Text title={t('profile.page')} />
      {canEdit && (
        <div>
          {readonly ? (
            <Button onClick={onEditBtnClick} theme={THEME_BTN.OUTLINE}>
              {t('edit')}
            </Button>
          ) : (
            <HStack gap="12">
              <Button onClick={onSaveEditedForm} theme={THEME_BTN.OUTLINE}>
                {t('save')}
              </Button>
              <Button onClick={onCancelEditBtnClick} theme={THEME_BTN.OUTLINE_WARN}>
                {t('cancel')}
              </Button>
            </HStack>
          )}
        </div>
      )}
    </HStack>
  );
});
