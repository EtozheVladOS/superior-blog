import { lazy } from "react";

// чтоб проверить как работает Suspense в App.tsx
export const MainPageAsync = lazy(() => new Promise((resolve) => {
  //@ts-ignore
  setTimeout(() => resolve(import('./index')), 1000)
}));
