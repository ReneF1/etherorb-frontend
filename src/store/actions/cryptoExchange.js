/**
 * Created by renefuchtenkordt on 08.07.17.
 */
import axios from 'axios'

function getCryptoValue(id, cryptoSymbol, currencySymbol, market, timeArray) {
    let cryptoArray = []
    for (let value of timeArray) {
        console.log(value)
        axios.get('pricehistorical?fsym=' + cryptoSymbol + '&tsyms=' + currencySymbol + '&markets=' + market + '&ts=' + value).then(function (response) {
            console.log(response)
            cryptoArray.push({date: value, close: response.payload.response})
        });
    }
    return {
        type: 'BUILD_CRYPTO_ARRAY_SUCCESS',
        payload: {[id]: cryptoArray}
    }
}

export {
    getCryptoValue,
}