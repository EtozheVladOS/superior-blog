import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, THEME_BTN } from '@/shared/ui/Button';
import { RoutePath } from '@/shared/config/routeConfig/routeConfig';
import { getArticlesDetailsData } from '@/entities/Article/model/selectors/articleDetails';
import { getCanUserEditArticle } from '../../model/selectors/article';
import cl from './ArticleDetailsPageHeader.module.scss';

interface ArticleDetailsPageHeaderProps {
  className?: string;
}

export const ArticleDetailsPageHeader = memo(({ className }: ArticleDetailsPageHeaderProps) => {
  const { t } = useTranslation('articles');
  const navigate = useNavigate();

  const canEdit = useSelector(getCanUserEditArticle);
  const article = useSelector(getArticlesDetailsData);

  const onEditArticle = useCallback(() => {
    navigate(`${RoutePath.article_details}${article?.id}/edit`);
  }, [article?.id, navigate]);

  const onBackToList = useCallback(() => {
    navigate(RoutePath.articles);
  }, [navigate]);

  return (
    <div className={classNames(cl.header, {}, [className])}>
      <Button onClick={onBackToList} theme={THEME_BTN.OUTLINE}>
        {t('back-to-list')}
      </Button>

      {canEdit && (
        <Button
          onClick={onEditArticle}
          theme={THEME_BTN.OUTLINE}
          className={cl.editBtn}
        >
          {t('edit-article')}
        </Button>
      )}
    </div>
  );
});
