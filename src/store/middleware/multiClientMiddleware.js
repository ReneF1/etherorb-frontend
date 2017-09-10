import axios from 'axios';
import { multiClientMiddleware } from 'redux-axios-middleware';

const clients =
  {
    kraken: {
      client: axios.create({
        baseURL: 'https://api.kraken.com/0/public/',
        responseType: 'json',
      }),
    },
    etherOrbApi: {
      client: axios.create({
        baseURL: '/db.json',
        responseType: 'json',
      }),
    },
    cryptoCompareApi: {
      client: axios.create({
        baseURL: 'https://min-api.cryptocompare.com/data/',
        responseType: 'json',
      }),
    },
  };

export default multiClientMiddleware(clients);
