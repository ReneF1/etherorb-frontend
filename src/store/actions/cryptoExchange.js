/**
 * Created by renefuchtenkordt on 08.07.17.
 */

function callCryptoExchange(id,cryptoSymbol,currencySymbol,market,timestamp) {
    return {
        types: ['GET_CRYPTO_EXCHANGE_REQUEST', 'GET_CRYPTO_EXCHANGE_SUCCESS', 'GET_CRYPTO_EXCHANGE_ERROR'],
        payload: {
            client: 'cryptoCompareApi',
            id,
            cryptoSymbol,
            currencySymbol,
            market,
            timestamp,
            request: {
                url: 'pricehistorical?fsym=' + cryptoSymbol + '&tsyms=' + currencySymbol + '&markets=' + market + '&ts=' + timestamp,
            },
        },
    };
}

export {
    callCryptoExchange,
}