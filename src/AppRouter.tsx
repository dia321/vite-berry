import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Chart from './pages/Chart/components/Chart';

const Text = lazy(() => import('./pages/Text'));
const D3chart = lazy(() => import('./pages/D3Chart'));
const Dog = lazy(() => import('./pages/Dog/components/Dog'));
const InfiniteScroll = lazy(() => import('./pages/InfiniteScroll/components/InfiniteScroll'));

export const AppRouter = () => {
  return (
    <Suspense>
      <Routes>
        <Route path="/text" element={<Text />} />
        <Route path="/d3" element={<D3chart />} />
        <Route path="/dog" element={<Dog />} />
        <Route path="/infinite" element={<InfiniteScroll />} />
        <Route path="/chart" element={<Chart />} />
      </Routes>
    </Suspense>
  );
};
