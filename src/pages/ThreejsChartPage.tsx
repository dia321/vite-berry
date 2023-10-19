import { useQuery } from '@tanstack/react-query';
import { getThreejsChartData } from '../api';
import { ThreejsChart } from '../components/ThreejsChart';
import { DataPoints } from '../@type';

const ThreejsChartPage = () => {
  const { data, isLoading } = useQuery<DataPoints[][]>(['chart'], getThreejsChartData);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  console.log(data);
  return (
    <>
      {data?.map((v: DataPoints[], i: number) => {
        return <ThreejsChart key={i} chartData={v} />;
      })}
    </>
  );
};

export default ThreejsChartPage;
