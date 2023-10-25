import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Text } from '@/shared/ui/Text/Text';
import { ArticleList, ArticleView } from '@/entities/Article';
import cl from './ArticlesPage.module.scss';

const ArticlesPage = () => {
  const { t } = useTranslation('articles');

  return (
    <div>
      <Text title={t('articles.page')} className={cl.title} />
      <ArticleList
        view={ArticleView.SMALL}
        articles={[]}
      />
    </div>
  );
};

export default memo(ArticlesPage);
