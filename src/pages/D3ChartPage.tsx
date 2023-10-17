import { useQuery } from '@tanstack/react-query';
import { getD3ChartData } from '../api';
import { D3Chart } from '../components/D3Chart';
import { DataPoints } from '../@type';

const D3ChartPage = () => {
  const { data, isLoading } = useQuery<DataPoints[][]>(['chart'], getD3ChartData);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {data?.map((v: DataPoints[], i: number) => {
        return <D3Chart key={i} chartData={v} />;
      })}
    </>
  );
};

export default D3ChartPage;
