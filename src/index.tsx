import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { App } from "./App";
import ThemesProvider from "./themes/ThemesProvider";

render(
  <BrowserRouter>
    <ThemesProvider>
      <App />
    </ThemesProvider>
  </BrowserRouter>,
  document.getElementById('root')
)
