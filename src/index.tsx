import './app/styles/index.scss';
import '@/shared/config/i18n/i18n';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { App } from '@/app/App';
import { ThemesProvider } from '@/app/providers/ThemeProvider';
import { ErrorBoundary } from '@/app/providers/ErrorBoundary';
import { StoreProvider } from '@/app/providers/StoreProvider';

render(
  <BrowserRouter>
    <StoreProvider>
      <ThemesProvider>
        <ErrorBoundary>
          <App />
        </ErrorBoundary>
      </ThemesProvider>
    </StoreProvider>
  </BrowserRouter>,
  document.getElementById('root'),
);
