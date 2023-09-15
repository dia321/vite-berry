import { RecoilRoot } from 'recoil';

import './App.css';

import { Link } from 'react-router-dom';
import { AppRouter } from './AppRouter';

function App() {
  return (
    <RecoilRoot>
      <Link to="/text">
        <button>text</button>
      </Link>
      <Link to="/d3">
        <button>d3chart</button>
      </Link>
      <Link to="/dog">
        <button>dog</button>
      </Link>
      <AppRouter />
    </RecoilRoot>
  );
}

export default App;
