import './styles/index.scss';
import { Suspense } from 'react';
import { AppRouter } from '@/app/providers/router';
import { useTheme } from '@/app/providers/ThemeProvider';
import { classNames } from '@/shared/lib/className';
import { Navbar } from '@/widgets/NavBar';
import { Sidebar } from '@/widgets/Sidebar';

export const App = () => {
  const { theme } = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <Suspense fallback="">
        <Navbar />
        <div className="content-page">
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  )
}

