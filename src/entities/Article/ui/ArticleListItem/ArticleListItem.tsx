import { memo, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { classNames } from '@/shared/lib/classNames/classNames';
import { RoutePath } from '@/shared/config/routeConfig/routeConfig';
import EyeSvg from '@/shared/assets/icons/eye.svg';
import { Text } from '@/shared/ui/Text/Text';
import { Icon } from '@/shared/ui/Icon/Icon';
import { Avatar } from '@/shared/ui/Avatar/Avatar';
import { Card } from '@/shared/ui/Card/Card';
import { Button, THEME_BTN } from '@/shared/ui/Button/ui/Button';

import cl from './ArticleListItem.module.scss';
import {
  Article,
  ArticleBlockType,
  ArticleTextBlock,
  ArticleView,
} from '../../model/types/article';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';

interface ArticleListItemProps {
  article: Article;
  view?: ArticleView;
  className?: string;
}

export const ArticleListItem = memo(({
  article,
  view = ArticleView.SMALL,
  className,
}: ArticleListItemProps) => {
  const { t } = useTranslation('articles');
  const navigate = useNavigate();

  const onOpenArticle = useCallback(() => {
    navigate(`${RoutePath.article_details}${article.id}`);
  }, [article.id, navigate]);

  const articleTypes = <Text text={article.type.join(', ')} className={cl.articleTypes} />;
  const articleViews = (
    <>
      <Text text={String(article.views)} className={cl.articleViews} />
      <Icon SvgIcon={EyeSvg} />
    </>
  );

  if (view === ArticleView.BIG) {
    const firstTextBlock = article.blocks
      .find((block) => block.type === ArticleBlockType.TEXT) as ArticleTextBlock | undefined;

    return (
      <div className={classNames(cl.articlelistitem, {}, [className, cl[view]])}>
        <Card className={cl.card}>
          <div className={cl.header}>
            <Avatar size={60} src={article.user.avatar} />
            <Text text={article.user.username} className={cl.username} />
            <Text text={article.creationDate} className={cl.creationDate} />
          </div>

          <Text title={article.title} className={cl.articleTitle} />
          {articleTypes}
          <img src={article.img} alt={article.id} className={cl.articleImg} />

          {firstTextBlock !== undefined && (
            <ArticleTextBlockComponent block={firstTextBlock} className={cl.textBlock} />
          )}

          <div className={cl.footer}>
            <Button onClick={onOpenArticle} theme={THEME_BTN.OUTLINE}>
              {t('read-more')}
            </Button>
            {articleViews}
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div className={classNames(cl.articlelistitem, {}, [className, cl[view]])}>
      <Card onClick={onOpenArticle} className={cl.card}>
        <div className={cl.imgWrapper}>
          <img src={article.img} alt={article.id} className={cl.articleImg} />
          <Text text={article.creationDate} className={cl.creationDate} />
        </div>

        <div className={cl.infoWrapper}>
          {articleTypes}
          {articleViews}
        </div>

        <Text title={article.title} className={cl.articleTitle} />
      </Card>
    </div>
  );
});
