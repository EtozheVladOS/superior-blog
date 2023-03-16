import { render } from '@testing-library/react';
import { ReactNode } from 'react';
import { I18nextProvider } from 'react-i18next';
import i18nCongifForTesting from '@/shared/config/i18n/i18nCongifForTesting';

export const RenderWithTranslation = (component: ReactNode) => {
  render(
    <I18nextProvider i18n={i18nCongifForTesting}>
      {component}
    </I18nextProvider>,
  );
};
