import { useRecoilState } from 'recoil';
import textState from '../recoil/example/atom';

const TextChaser = () => {
  const [text] = useRecoilState(textState);
  return <div>{text}</div>;
};

export default TextChaser;
