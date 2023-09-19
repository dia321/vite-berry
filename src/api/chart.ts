import { DataPoints } from '../@type';
import { d3ChartData, uplotChartData } from '../components/chart';

export async function getD3ChartData(): Promise<DataPoints[][]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(d3ChartData as DataPoints[][]);
    }, 500); // 0.5초 후에 데이터를 리턴
  });
}

export async function getUplotChartData(): Promise<number[][][]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(uplotChartData as number[][][]);
    }, 500); // 0.5초 후에 데이터를 리턴
  });
}
