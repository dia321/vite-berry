import * as d3 from 'd3';
import dayjs from 'dayjs';
import { DataPoints } from '../@type';

function convertToUnixTimestamps(dateStrings: string[]): number[] {
  const timestamps: number[] = [];

  for (let i = 0; i < dateStrings.length; i++) {
    const date = new Date(dateStrings[i]);
    const timestampInSeconds = Math.floor(date.getTime() / 1000);
    timestamps.push(timestampInSeconds);
  }

  return timestamps;
}
const generateD3Data = (seriesCount: number, dataPointCount: number): DataPoints[] => {
  const startDate = new Date('2023-09-01 11:11');
  const data = [];

  for (let j = 0; j < seriesCount; j++) {
    const unit = [];
    for (let i = 0; i < dataPointCount; i++) {
      const newDate = new Date(startDate.getTime() + i * 60000); // 1분 간격으로 증가
      const dateString = d3.timeFormat('%Y-%m-%d %H:%M')(newDate);
      const value = Math.floor(Math.random() * 100); // 랜덤 값 생성 (0부터 99까지)

      unit.push({ date: dateString, value });
    }
    data.push(unit);
  }

  return data;
};

const generateUplotData = (seriesCount: number, dataPointCount: number): number[][] => {
  const startDate = new Date('2023-09-01 11:11');
  const data = [];

  for (let i = 0; i < seriesCount + 1; i++) {
    const rowData = [];
    if (i === 0) {
      for (let j = 0; j < dataPointCount; j++) {
        const newDate = new Date(startDate.getTime() + j * 60000); // 1-minute interval
        const dateString = dayjs(newDate).format('YYYY-MM-DD HH:mm');
        const date = new Date(dateString);
        const timestampInSeconds = Math.floor(date.getTime() / 1000);

        rowData.push(timestampInSeconds);
      }
    } else {
      for (let j = 0; j < dataPointCount; j++) {
        rowData.push(Math.floor(Math.random() * (100 - 10 + 1)) + 10);
      }
    }
    data.push(rowData);
  }
  return data;
};

export const d3ChartData = [...Array(10).keys()].map(() => generateD3Data(5, 10));
export const uplotChartData = [...Array(10).keys()].map(() => generateUplotData(5, 1000));
export const chartjsData = [...Array(10).keys()].map(() => generateD3Data(5, 1000));
export const threejsData = [...Array(10).keys()].map(() => generateD3Data(5, 10));
