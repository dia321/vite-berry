import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

const Text = lazy(() => import('./pages/Text'));
const D3chart = lazy(() => import('./pages/D3Chart'));
const Dog = lazy(() => import('./pages/Dog/components/Dog'));

export const AppRouter = () => {
  return (
    <Suspense>
      <Routes>
        <Route path="/text" element={<Text />} />
        <Route path="/d3" element={<D3chart />} />
        <Route path="/dog" element={<Dog />} />
      </Routes>
    </Suspense>
  );
};
