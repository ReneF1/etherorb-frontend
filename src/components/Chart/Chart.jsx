import React from 'react';
import PropTypes from 'prop-types';
import momentTimezone from 'moment-timezone';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import mapChartData from '../../shared/chartHelper';
import { contentEn } from '../../assets';
import './Chart.css';

const timeZone = momentTimezone.tz.guess();

const Chart = ({ chartData, prediction, nextHour }) => (
  <div>
    <h2 className="chart__headline">{contentEn.chart.headline}</h2>
    <LineChart
      width={900}
      height={400}
      data={mapChartData(chartData, prediction, nextHour, timeZone)}
      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
    >
      <XAxis dataKey="Time" />
      <YAxis domain={['dataMin - 20', 'dataMax + 20']} />
      <CartesianGrid strokeDasharray="3 3" />
      <Tooltip />
      <Legend />
      <Line
        dataKey="ETHxUSD"
        stroke="#4527a0"
        fill="url(#colorETHxUSD)"
      />
      <Line
        dataKey="Prediction"
        connectNulls
        stroke="#ff3823"
        strokeDasharray="5 5"
        fill="url(#colorPrediction)"
      />
      <defs>
        <linearGradient id="colorETHxUSD" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="#4527a0" stopOpacity={0.8} />
          <stop offset="95%" stopColor="#ffffff" stopOpacity={0} />
        </linearGradient>
        <linearGradient id="colorPrediction" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="#ff3823" stopOpacity={0.8} />
          <stop offset="95%" stopColor="#ffffff" stopOpacity={0} />
        </linearGradient>
      </defs>
    </LineChart>
  </div>
   );

Chart.propTypes = {
  chartData: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  prediction: PropTypes.number.isRequired,
  nextHour: PropTypes.shape().isRequired,
};

export default Chart;
