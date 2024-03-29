import { memo, useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { DynamicReducerLoader, ReducersList } from '@/shared/lib/components/DynamicReducerLoader';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import CalendarSvg from '@/shared/assets/icons/calendar.svg';
import EyeSvg from '@/shared/assets/icons/eye.svg';
import { Text } from '@/shared/ui/Text/Text';
import { Skeleton } from '@/shared/ui/Skeleton/Skeleton';
import { Avatar } from '@/shared/ui/Avatar/Avatar';
import { Icon } from '@/shared/ui/Icon/Icon';
import { HStack } from '@/shared/ui/Stack';

import cl from './ArticleDetails.module.scss';
import { articleDeatilsReducer } from '../../model/slice/articleDetailsSlice';
import { fetchArticleById } from '../../model/services/fetchArticleById/fetchArticleById';
import {
  getArticlesDetailsData,
  getArticlesDetailsError,
  getArticlesDetailsIsLoading,
} from '../../model/selectors/articleDetails';
import { ArticleBlock, ArticleBlockType } from '../../model/types/article';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';
import { ArticleCodeBlockComponent } from '../ArticleCodeBlockComponent/ArticleCodeBlockComponent';
import {
  ArticleImageBlockComponent,
} from '../ArticleImageBlockComponent/ArticleImageBlockComponent';

interface ArticleDetailsProps {
  id: string;
}

const reducersList: ReducersList = {
  articleDeatils: articleDeatilsReducer,
};

export const ArticleDetails = memo(({ id }: ArticleDetailsProps) => {
  const { t } = useTranslation('articles');
  const dispatch = useAppDispatch();

  const articleData = useSelector(getArticlesDetailsData);
  const isLoading = useSelector(getArticlesDetailsIsLoading);
  const errorMsg = useSelector(getArticlesDetailsError);

  useEffect(() => {
    if (__PROJECT_ENIRONMENT__ !== 'storybook') {
      dispatch(fetchArticleById(id));
    }
  }, [id]);

  const renderBlock = useCallback((block: ArticleBlock) => {
    switch (block.type) {
      case ArticleBlockType.TEXT:
        return <ArticleTextBlockComponent key={block.id} block={block} className={cl.block} />;

      case ArticleBlockType.CODE:
        return <ArticleCodeBlockComponent key={block.id} block={block} className={cl.block} />;

      case ArticleBlockType.IMAGE:
        return <ArticleImageBlockComponent key={block.id} block={block} className={cl.block} />;

      default:
        return null;
    }
  }, []);

  let articleContent;

  if (isLoading) {
    articleContent = (
      <div className={cl.skeletons}>
        <Skeleton className={cl.avatar} width={140} height={140} borderRadius="50%" />
        <Skeleton width="60%" height={32} />
        <Skeleton width="80%" height={24} />
        <Skeleton width="100%" height={200} />
        <Skeleton width="80%" height={24} />
        <Skeleton width="100%" height={200} />
      </div>
    );
  } else if (errorMsg) {
    articleContent = (
      <Text text={t('error-loading')} textAlign="center" />
    );
  } else {
    articleContent = (
      <div>
        {articleData?.img && <Avatar size={140} src={articleData?.img} className={cl.avatar} />}

        <Text
          title={articleData?.title}
          text={articleData?.subtitle}
          size="large"
        />

        <HStack gap="12">
          <Icon SvgIcon={CalendarSvg} />
          <Text text={articleData?.creationDate} />
        </HStack>
        <HStack gap="12">
          <Icon SvgIcon={EyeSvg} />
          <Text text={String(articleData?.views ?? 0)} />
        </HStack>

        {articleData?.blocks.map(renderBlock)}
      </div>
    );
  }

  return (
    <DynamicReducerLoader reducersList={reducersList}>
      <div className={cl.container}>
        {articleContent}
      </div>
    </DynamicReducerLoader>
  );
});
