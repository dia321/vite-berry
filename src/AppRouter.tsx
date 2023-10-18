import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Chart from './pages/Chart/components/Chart';

const Text = lazy(() => import('./pages/Text'));
const D3ChartPage = lazy(() => import('./pages/D3ChartPage'));
const ThreejsChartPage = lazy(() => import('./pages/ThreejsChartPage'));
const UplotChartPage = lazy(() => import('./pages/UplotChartPage'));
const ChartjsPage = lazy(() => import('./pages/ChartjsPage'));
const Dog = lazy(() => import('./pages/Dog/components/Dog'));
const InfiniteScroll = lazy(() => import('./pages/InfiniteScroll/components/InfiniteScroll'));

export const AppRouter = () => {
  return (
    <Suspense>
      <Routes>
        <Route path="/text" element={<Text />} />
        <Route path="/d3" element={<D3ChartPage />} />
        <Route path="/uplot" element={<UplotChartPage />} />
        <Route path="/chartjs" element={<ChartjsPage />} />
        <Route path="/dog" element={<Dog />} />
        <Route path="/infinite" element={<InfiniteScroll />} />
        <Route path="/chart" element={<Chart />} />
        <Route path="/threejs" element={<ThreejsChartPage />} />
      </Routes>
    </Suspense>
  );
};
