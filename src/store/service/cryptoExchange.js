import axios from 'axios';


const cryptoExchangeService = (cryptoSymbol, currencySymbol, market, timeArray) => {
    return new Promise((resolve) => {
        const data = []
        const promises = []

        timeArray.forEach(function(value){
            let requestUrl = `https://min-api.cryptocompare.com/data/pricehistorical?fsym=${cryptoSymbol}&tsyms=${currencySymbol}&markets=${market}&ts=${value}`;
            promises.push(axios.get(requestUrl))
        });

        Promise.all(promises).then(function(results) {
            results.forEach(function(response) {
                data.push = response.data[cryptoSymbol][currencySymbol];
                resolve(data)
            })
        })
    })
}
export default cryptoExchangeService