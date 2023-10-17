import { useQuery } from '@tanstack/react-query';
import { getUplotChartData } from '../api';
import { UPlotChart } from '../components/UplotChart';

const UPlotChartPage = () => {
  const { data, isLoading } = useQuery<number[][][]>(['chart'], getUplotChartData);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {data?.map((v: number[][], i: number) => {
        return <UPlotChart key={i} chartData={v} />;
      })}
    </>
  );
};

export default UPlotChartPage;
