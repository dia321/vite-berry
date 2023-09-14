import { RecoilRoot } from 'recoil';

import './App.css';
import TextController from './pages/TextController';
import TextChaser from './pages/TextChaser';

function App() {
  return (
    <RecoilRoot>
      <TextChaser />
      <TextController />
    </RecoilRoot>
  );
}

export default App;
