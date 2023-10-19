/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import UplotReact from 'uplot-react';

interface UPlotChartProps {
  chartData: number[][];
}

export const UPlotChart: React.FC<UPlotChartProps> = ({ chartData }) => {
  let seriesData: number[][] = [];
  let options: any = {};

  if (chartData.length > 0) {
    seriesData = chartData
      .slice(1)
      .map((series: any) => series.map((item: any) => (typeof item === 'number' ? item : NaN)));

    options = {
      width: 300,
      height: 300,
      scales: {
        x: {
          time: true,
          range: (self: any, newMin: number, newMax: number) => {
            // prevent zoom
            if (newMax - newMin < 2700) {
              const differ = newMax - newMin;
              const haveToAdd = 2700 - differ;
              return [newMin - haveToAdd / 2, newMax + haveToAdd / 2];
            }

            // allow zoom
            return [newMin, newMax];
          }
        }
      },
      cursor: {
        drag: {
          x: true,
          y: false
        },
        sync: {
          key: 'moo'
        }
      },
      select: {
        over: false
      },
      series: [
        {},
        ...seriesData.map((data, index) => ({
          show: true,
          spanGaps: false,
          label: `Series ${index + 1}`,
          value: (self: any, rawValue: any) => {
            if (!rawValue) {
              return '--';
            }
            return rawValue?.toFixed(2);
          },
          width: 1,
          band: true,
          stroke: 'red'
        }))
      ]
    };
  }

  return <UplotReact options={options} data={chartData} />;
};
