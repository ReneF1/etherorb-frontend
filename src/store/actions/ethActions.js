/**
 * Created by renefuchtenkordt on 08.07.17.
 */

function loadEthUsd() {
    return {
        types: ['GET_ETH_USD_REQUEST', 'GET_ETH_USD_SUCCESS', 'GET_ETH_USD_ERROR'],
        payload: {
            client: 'kraken',
            request: {
                url: 'Ticker?pair=ETHUSD',
            },
        },
    };
}

function loadEthUsdHistory(timestamp) {
    return {
        types: ['GET_ETH_USD_HIST_REQUEST', 'GET_ETH_USD_HIST_SUCCESS', 'GET_ETH_USD_HIST_ERROR'],
        payload: {
            client: 'cryptoCompareApi',
            request: {
                url: 'pricehistorical?fsym=ETH&tsyms=USD&markets=KRAKEN&ts=' + timestamp,
            },
        },
    };
}

export {
    loadEthUsd,
    loadEthUsdHistory
}