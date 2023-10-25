import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ArticleView } from '@/entities/Article/model/types/article';
import LinesIcon from '@/shared/assets/icons/lines.svg';
import TileIcon from '@/shared/assets/icons/tiles.svg';
import { Button, THEME_BTN } from '@/shared/ui/Button/ui/Button';
import { Icon } from '@/shared/ui/Icon/Icon';
import cl from './ArticleViewSelector.module.scss';

interface ArticleViewSelectorProps {
  view: ArticleView;
  onViewClick?: (view: ArticleView) => void;
  className?: string;
}

const viewTypes = [
  {
    view: ArticleView.BIG,
    icon: LinesIcon,
  },
  {
    view: ArticleView.SMALL,
    icon: TileIcon,
  },
];

export const ArticleViewSelector = memo(({
  view,
  onViewClick,
  className,
}: ArticleViewSelectorProps) => {
  const onChangeTheme = (newView: ArticleView) => () => {
    onViewClick?.(newView);
  };

  return (
    <div className={classNames(cl.container, {}, [className])}>
      {viewTypes.map((viewType) => (
        <Button onClick={onChangeTheme(viewType.view)} theme={THEME_BTN.CLEAR}>
          <Icon
            SvgIcon={viewType.icon}
            className={classNames('', {
              [cl.currentView]: viewType.view === view,
            })}
          />
        </Button>
      ))}
    </div>
  );
});
