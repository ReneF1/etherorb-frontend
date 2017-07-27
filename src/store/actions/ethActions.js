/**
 * Created by renefuchtenkordt on 08.07.17.
 */

export default function loadEthUsd() {
    return {
        types: ['GET_ETH_USD_REQUEST','GET_ETH_USD_SUCCESS','GET_ETH_USD_ERROR'],
        payload: {
            client: 'kraken',
            request: {
                url: 'Ticker?pair=ETHUSD'
            }
        }
    };
}
