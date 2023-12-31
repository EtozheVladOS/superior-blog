module.exports = (componentName) => `import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import cl from './${componentName}.module.scss';

interface ${componentName}Props {
  className?: string;
}

export const ${componentName} = memo(({ className }: ${componentName}Props) => {
  const { t } = useTranslation();
  return (
    <div className={classNames(cl.${componentName}, {}, [className])}>
      ${componentName}
    </div>
  );
});
`;
