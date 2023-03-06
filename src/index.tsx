import '@/shared/config/i18n/i18n';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { App } from '@/app/App';
import { ThemesProvider } from '@/app/providers/ThemeProvider';
import { ErrorBoundary } from '@/app/providers/ErrorBoundary';

render(
  <BrowserRouter>
    <ErrorBoundary>
      <ThemesProvider>
        <App />
      </ThemesProvider>
    </ErrorBoundary>
  </BrowserRouter>,
  document.getElementById('root'),
);
