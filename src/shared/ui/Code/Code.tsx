import { ReactNode, memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, THEME_BTN } from '@/shared/ui/Button/ui/Button';
import { Icon } from '@/shared/ui/Icon/Icon';
import CopySvg from '@/shared/assets/icons/copy.svg';
import cl from './Code.module.scss';

interface CodeProps {
  className?: string;
  children: ReactNode;
}

export const Code = memo(({ className, children }: CodeProps) => {
  return (
    <pre className={classNames(cl.code, {}, [className])}>
      <Button theme={THEME_BTN.OUTLINE} className={cl.copyBtn}>
        <Icon SvgIcon={CopySvg} />
      </Button>
      <code>
        {children}
      </code>
    </pre>
  );
});
