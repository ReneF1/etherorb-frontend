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
    const obj = {
      Time: fullHour,
      Prediction: prediction || 300,
    };
    chartData.push({ Time: nextMinute });
    chartData.push(obj);
  }
  return chartData;
};
export default mapChartData;