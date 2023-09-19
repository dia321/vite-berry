import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

const Text = lazy(() => import('./pages/Text'));
const D3ChartPage = lazy(() => import('./pages/D3ChartPage'));
const UplotChartPage = lazy(() => import('./pages/UplotChartPage'));

export const AppRouter = () => {
  return (
    <Suspense>
      <Routes>
        <Route path="/text" element={<Text />} />
        <Route path="/d3" element={<D3ChartPage />} />
        <Route path="/uplot" element={<UplotChartPage />} />
        <Route path="/dog" element={<Dog />} />
      </Routes>
    </Suspense>
  );
};
