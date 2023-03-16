import { render } from '@testing-library/react';
import { ReactNode } from 'react';
import { I18nextProvider } from 'react-i18next';
import { MemoryRouter } from 'react-router-dom';
import i18nCongifForTesting from '@/shared/config/i18n/i18nCongifForTesting';

export interface ComponentRenderOptions {
  route?: string;
}

export const ComponentRender = (
  component: ReactNode,
  options: ComponentRenderOptions = {},
) => {
  const { route = '/' } = options;

  render(
    <MemoryRouter initialEntries={[route]}>
      <I18nextProvider i18n={i18nCongifForTesting}>
        {component}
      </I18nextProvider>
    </MemoryRouter>,
  );
};
