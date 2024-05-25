import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import { axisClasses } from '@mui/x-charts/ChartsAxis';

const uData = [40, 30, 20, 27, 10, 23, 34];
const pData = [24, 13, 98, 39, 48, 38, 43];
const xLabels = [
  '21 jan',
  '22 jan',
  '23 jan',
  '24 jan',
  '25 jan',
  '26 jan',
  '27 jan',
];

export default function SimpleBarChart() {
  return (
    <BarChart
      sx={(theme)=>({
        [`.${axisClasses.root}`]: {
            [`.${axisClasses.tick}, .${axisClasses.line}`]: {
              stroke: 'white',
              strokeWidth: 3,
            },
            [`.${axisClasses.tickLabel}`]: {
              fill: '#6B7280',
            },
          },
      })}
      width={850}
      height={270}
      series={[
        { data: pData,  id: 'pvId', color: '#4F46E5' },
        { data: uData,  id: 'uvId', color: '#10B981' },
      ]}
      xAxis={[{ data: xLabels, scaleType: 'band', categoryGapRatio: 0.6,
      barGapRatio: 0.3 }]}
    />
  );
}