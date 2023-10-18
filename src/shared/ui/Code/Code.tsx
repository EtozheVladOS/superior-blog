import { memo, useCallback } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, THEME_BTN } from '@/shared/ui/Button/ui/Button';
import { Icon } from '@/shared/ui/Icon/Icon';
import CopySvg from '@/shared/assets/icons/copy.svg';
import cl from './Code.module.scss';

interface CodeProps {
  className?: string;
  text: string;
}

export const Code = memo(({ className, text }: CodeProps) => {
  const onCopy = useCallback(() => {
    navigator.clipboard.writeText(text);
  }, [text]);

  return (
    <pre className={classNames(cl.code, {}, [className])}>
      <Button onClick={onCopy} theme={THEME_BTN.CLEAR} className={cl.copyBtn}>
        <Icon SvgIcon={CopySvg} />
      </Button>
      <code>
        {text}
      </code>
    </pre>
  );
});
