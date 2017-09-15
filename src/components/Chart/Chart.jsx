import React from 'react';
import PropTypes from 'prop-types';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ReferenceLine } from 'recharts';
import { contentEn } from '../../assets';
import './Chart.css';

const Chart = props =>
    (
      <div>
        <h2 className="chart__headline">{contentEn.chart.headline}</h2>
        <AreaChart
          width={900}
          height={400}
          data={props.chartData}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <XAxis dataKey="Time" />
          <YAxis domain={['dataMin - 10', 'dataMax + 10']} />
          <CartesianGrid strokeDasharray="3 3" />
          <ReferenceLine x="13:40" stroke="#4527a0" label={contentEn.chart.referenceLabel} />
          <Tooltip />
          <Legend />
          <Area
            dataKey="ETHxUSD"
            stroke="#4527a0"
            fill="url(#colorETHxUSD)"
          />
          <Area
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
        </AreaChart>
      </div>
    );

Chart.propTypes = {
  chartData: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
};

export default Chart;
