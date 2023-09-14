import { RecoilRoot } from 'recoil';

import './App.css';
import CharacterController from './pages/CharacterController';
import TextChaser from './pages/TextChaser';

function App() {
  return (
    <RecoilRoot>
      <TextChaser />
      <CharacterController />
    </RecoilRoot>
  );
}

export default App;
