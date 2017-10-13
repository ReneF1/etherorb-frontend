import React from 'react';
import PropTypes from 'prop-types';
import momentTimezone from 'moment-timezone';
import moment from 'moment';
import { Legend, Line, LineChart, ReferenceLine, Tooltip, XAxis, YAxis } from 'recharts';
import { findMaxEthValue, mapChartData } from '../../shared/chartHelper';
import { formatDollar } from '../../shared/formater';
import { contentEn } from '../../assets';
import './Chart.css';

const timeZone = momentTimezone.tz.guess();

const CustomizedAxisTick = React.createClass({
  render() {
    const { x, y, payload } = this.props;

    return (
      <g transform={`translate(${x},${y})`}>
        <text
          x={0}
          y={0}
          dy={16}
          textAnchor="end"
          fill="#666"
          transform="rotate(-35)"
        >
          {payload.value}
        </text>
      </g>
    );
  },
});

const Chart = ({ chartData, prediction, nextHour }) => (
  <div>
    <h2 className="chart__headline">{contentEn.chart.headline}</h2>
    <LineChart
      width={900}
      height={400}
      data={mapChartData(chartData, prediction, nextHour, timeZone)}
      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
    >
      <XAxis domain={['auto', 'auto']} scale="auto" allowDataOverflow={false} minTickGap={10} dataKey="Time" interval="preserveStartEnd" tick={<CustomizedAxisTick />} />
      <YAxis domain={['auto', 'auto']} scale="auto" allowDataOverflow={false} interval="preserveStartEnd" type="number" axisLine={{ stroke: 'rgba(70, 40, 159, 0.75)' }} tick={{ fill: '#4527a0' }} />
      <ReferenceLine
        y={prediction || findMaxEthValue(chartData)}
        isFront
        label={`Prediction: ${formatDollar(prediction || findMaxEthValue(chartData))} @ ${moment(nextHour).tz(timeZone).format('HH:mm')}`}
        stroke="rgba(255, 56, 35, 0.25)"
        strokeDasharray="3 3"
      />
      <Tooltip />
      <Legend wrapperStyle={{ bottom: '-20px' }} />
      <Line
        dataKey="ETHxUSD"
        stroke="#4527a0"
        fill="url(#colorETHxUSD)"
      />
      <Line
        dataKey="Prediction"
        connectNulls
        stroke="#ff3823"
        strokeDasharray="3 3"
        fill="url(#colorPrediction)"
      />
    </LineChart>
  </div>
   );

Chart.propTypes = {
  chartData: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  prediction: PropTypes.number.isRequired,
  nextHour: PropTypes.shape().isRequired,
};

export default Chart;
