import { useQuery } from '@tanstack/react-query';
import { getChartjsData } from '../api';
import { DataPoints } from '../@type';
import { ChartjsChart } from 'src/components/ChartjsChart';

const ChartjsPage = () => {
  const { data, isLoading } = useQuery<DataPoints[][]>(['chart'], getChartjsData);

  if (isLoading) {
    return <div>Loading...</div>;
  }
console.log(JSON.stringify(data))
  return (
    <>
      {data?.map((v: DataPoints[], i: number) => {
        return <ChartjsChart key={i} chartData={v} />;
      })}
    </>
  );
};

export default ChartjsPage;
