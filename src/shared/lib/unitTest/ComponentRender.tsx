import { render } from '@testing-library/react';
import { ReactNode } from 'react';
import { I18nextProvider } from 'react-i18next';
import { MemoryRouter } from 'react-router-dom';
import { ReducersMapObject } from '@reduxjs/toolkit';
import i18nCongifForTesting from '@/shared/config/i18n/i18nCongifForTesting';
import { StateSchema, StoreProvider } from '@/app/providers/StoreProvider';

export interface ComponentRenderOptions {
  route?: string;
  initReduxState?: DeepPartial<StateSchema>,
  asyncRedusers?: DeepPartial<ReducersMapObject<StateSchema>>,
}

export const ComponentRender = (
  component: ReactNode,
  options: ComponentRenderOptions = {},
) => {
  const { route = '/', initReduxState, asyncRedusers } = options;

  render(
    <MemoryRouter initialEntries={[route]}>
      <StoreProvider
        initState={initReduxState as StateSchema}
        asyncRedusers={asyncRedusers}
      >
        <I18nextProvider i18n={i18nCongifForTesting}>
          {component}
        </I18nextProvider>
      </StoreProvider>
    </MemoryRouter>,
  );
};
