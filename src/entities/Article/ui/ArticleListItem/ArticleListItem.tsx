import { HTMLAttributeAnchorTarget, memo } from 'react';
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
import { AppLink } from '@/shared/ui/AppLink';

interface ArticleListItemProps {
  article: Article;
  view?: ArticleView;
  target?: HTMLAttributeAnchorTarget;
  className?: string;
}

export const ArticleListItem = memo(({
  article,
  view = ArticleView.SMALL,
  target,
  className,
}: ArticleListItemProps) => {
  const { t } = useTranslation('articles');

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
            <AppLink
              to={`${RoutePath.article_details}${article.id}`}
              target={target}
            >
              <Button theme={THEME_BTN.OUTLINE}>
                {t('read-more')}
              </Button>
            </AppLink>
            {articleViews}
          </div>
        </Card>
      </div>
    );
  }

  return (
    <AppLink
      to={`${RoutePath.article_details}${article.id}`}
      target={target}
      className={classNames(cl.articlelistitem, {}, [className, cl[view]])}
    >
      <Card className={cl.card}>
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
    </AppLink>
  );
});
