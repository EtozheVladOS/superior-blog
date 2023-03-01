import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { App } from "@/app/App";
import { ThemesProvider } from "@/app/providers/ThemeProvider";
import '@/shared/config/i18n/i18n';

render(
  <BrowserRouter>
    <ThemesProvider>
      <App />
    </ThemesProvider>
  </BrowserRouter>,
  document.getElementById('root')
)
