import { useRecoilState } from 'recoil';
import { dogState } from '@stores/dog';
import { useGetRandomDog } from '../hooks/queries';
import { useEffect } from 'react';

const Dog = () => {
  const [dogObj, setdogObj] = useRecoilState(dogState);
  const query = useGetRandomDog();

  useEffect(() => {
    console.log(query.data);
  }, [query.data]);
  return (
    <>
      <button onClick={() => {}}>api call</button>
      <div style={{ border: '1px solid black' }}>
        <img src={dogObj.src} alt={dogObj.alt} />
      </div>
    </>
  );
};

export default Dog;
