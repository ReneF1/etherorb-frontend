import moment from 'moment';

const mapChartData = (data, prediction, nextHour, timeZone) => {
  const chartData = [];
  data.forEach((d, index) => {
    const date = moment.unix(d.time);
    const formatedDate = date.tz(timeZone).format('HH:mm');
    const obj = {
      Time: formatedDate,
      ETHxUSD: d.open,
    };
    if (data.length - 1 === index) {
      obj.Prediction = d.open;
    }
    chartData.push(obj);
  });
  if (data.length <= 60) {
    const nextMinute = moment().add('1', 'minutes').tz(timeZone).format('HH:mm');
    const fullHour = moment(nextHour).tz(timeZone).format('HH:mm');
    const max = Math.max(...data.map(o => o.open));
    const obj = {
      Time: fullHour,
      Prediction: prediction || (max + (max * 0.001)).toFixed(2),
    };
    chartData.push({ Time: nextMinute });
    chartData.push(obj);
  }
  return chartData;
};

const scaleChartAxis = (chartData) => {
  const dataMin = Math.min(...chartData.map(o => o.open));
  const dataMax = Math.max(...chartData.map(o => o.open));
  return [`dataMin - ${(dataMin * 0.0025).toFixed(2)}`, `dataMax + ${(dataMax * 0.0025).toFixed(2)}`];
};

export {
  mapChartData,
  scaleChartAxis,
};
