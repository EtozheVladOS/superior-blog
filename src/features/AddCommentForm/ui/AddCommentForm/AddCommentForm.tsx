import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ConsoleInput } from '@/shared/ui/ConsoleInput';
import { Button, THEME_BTN } from '@/shared/ui/Button';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { DynamicReducerLoader, ReducersList } from '@/shared/lib/components/DynamicReducerLoader';
import {
  getAddCommentErrorSelector,
  getAddCommentTextSelector,
} from '../../model/selectors/addCommentSelectors';
import {
  addCommentFormActions,
  addCommentFormReducer,
} from '../../model/slices/addCommentFormSlice';
import cl from './AddCommentForm.module.scss';

export interface AddCommentFormProps {
  onSendComment: (value?: string) => void;
  className?: string;
}

const reducersList: ReducersList = {
  addCommentForm: addCommentFormReducer,
};

const AddCommentForm = ({ onSendComment, className }: AddCommentFormProps) => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  const text = useSelector(getAddCommentTextSelector);
  const error = useSelector(getAddCommentErrorSelector);

  const onCommentFormChange = useCallback((value: string) => {
    dispatch(addCommentFormActions.setText(value));
  }, [dispatch]);

  const handleOnSendComment = useCallback(() => {
    onSendComment(text);
    onCommentFormChange('');
  }, [onCommentFormChange, onSendComment, text]);

  return (
    <DynamicReducerLoader reducersList={reducersList}>
      <div className={classNames(cl.container, {}, [className])}>
        <ConsoleInput
          placeholder={`${t('enter-comment')}>`}
          value={text}
          onChange={onCommentFormChange}
        />
        <Button
          onClick={handleOnSendComment}
          theme={THEME_BTN.OUTLINE}
          disabled={!text}
          className={cl.sendBtn}
        >
          {t('send')}
        </Button>
      </div>
    </DynamicReducerLoader>
  );
};

export default memo(AddCommentForm);
