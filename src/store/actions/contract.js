/**
 * Created by renefuchtenkordt on 08.07.17.
 */
import axios from 'axios';
import buyTicketService from '../service/contract';

function buyTicket(estimate) {
    return {
        type: 'BUY_TICKET',
        payload: buyTicketService(estimate),
    };
}

function getContractData() {
    axios.get('http://www.etherorb.com/db.json').then(response => ({
        type: 'GET_CONTRACT_DATA',
        payload: response.data,
    }))
}

export {
    buyTicket,
    getContractData,
};
