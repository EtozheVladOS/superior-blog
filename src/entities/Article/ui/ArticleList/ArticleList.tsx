import { HTMLAttributeAnchorTarget, memo } from 'react';
import { useTranslation } from 'react-i18next';
// import { List, ListRowProps, WindowScroller } from 'react-virtualized';
import { classNames } from '@/shared/lib/classNames/classNames';
// import { PAGE_WRAPPER_ID } from '@/widgets/PageWrapper/PageWrapper';
import { Text } from '@/shared/ui/Text/Text';
import cl from './ArticleList.module.scss';
import { Article, ArticleView } from '../../model/types/article';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton';

interface ArticleListProps {
  articles?: Article[];
  isLoading?: boolean;
  view?: ArticleView;
  target?: HTMLAttributeAnchorTarget;
  className?: string;
}

const getSkeletons = (view: ArticleView) => new Array(view === ArticleView.BIG ? 3 : 9)
  .fill(null)
  .map((_, idx) => (
    <ArticleListItemSkeleton view={view} key={idx} />
  ));

export const ArticleList = memo(({
  articles = [],
  isLoading,
  view = ArticleView.SMALL,
  target,
  className,
}: ArticleListProps) => {
  const { t } = useTranslation('articles');

  // IDK it's doesn't work
  // const rowRender = ({
  //   index, key, style,
  // }: ListRowProps) => {
  //   console.log('RENDER');

  //   return (
  //     <div key={key} style={style}>
  //       <ArticleListItem
  //         article={articles[index]}
  //         view={view}
  //         target={target}
  //       />
  //     </div>
  //   );
  // };

  // return (
  //   <WindowScroller
  //     onScroll={() => console.log('scroll')}
  //     scrollElement={document.getElementById(PAGE_WRAPPER_ID) as Element}
  //   >
  //     {({
  //       width, height, registerChild, onChildScroll, isScrolling, scrollTop,
  //     }) => (
  //       <List
  //         height={height ?? 700}
  //         width={width ? width - 80 : 700}
  //         rowCount={articles.length}
  //         rowHeight={700}
  //         rowRenderer={rowRender}
  //         onScroll={onChildScroll}
  //         isScrolling={isScrolling}
  //         scrollTop={scrollTop}
  //         autoHeight
  //       />
  //     )}
  //   </WindowScroller>
  // );

  return (
    <div className={classNames(cl.articleList, {}, [className, cl[view]])}>
      {articles.length > 0
        ? articles.map((article) => (
          <ArticleListItem
            article={article}
            view={view}
            target={target}
            key={article.id}
          />
        ))
        : !isLoading && <Text text={t('no-articles-yet')} />}

      {isLoading && getSkeletons(view)}
    </div>
  );
});
