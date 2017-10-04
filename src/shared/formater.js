import moment from 'moment';

export const ethToDollar = (dollar, eth) => {
  const val = dollar * eth;
  const format = function moneyFormat(price, sign) {
    const pieces = parseFloat(price).toFixed(2).split('');
    let ii = pieces.length - 3;
    while (ii > 3) {
      ii -= 3;
      pieces.splice(ii, 0, ',');
    }
    return sign + pieces.join('');
  };
  return format(val, '$ ');
};

export const formatDollar = (dollar) => {
  const format = function moneyFormat(val, sign = '$ ') {
    const pieces = parseFloat(val).toFixed(2).split('');
    let ii = pieces.length - 3;
    while (ii > 3) {
      ii -= 3;
      pieces.splice(ii, 0, ',');
    }
    return sign + pieces.join('');
  };
  return format(dollar);
};

export const formatDollarToFloat = dollar => parseFloat(dollar.replace(/[$,]/g, ''));

export const unixTimestampToCountdown = unixTimestamp => moment(unixTimestamp, 'x').format('mm:ss');
