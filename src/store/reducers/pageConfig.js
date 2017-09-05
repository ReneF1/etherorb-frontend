import update from 'immutability-helper';

export default function reducer(state = {
    buyingDialog: {
        open: false
    },
}, action) {
    switch (action.type) {
        case 'TOGGLE_BUYING_DIALOG': {
            if (state.buyingDialog.open === false) {
                return update(state, {
                    buyingDialog: {
                        open: {$set: true},
                    }
                })
            } else {
                return update(state, {
                    buyingDialog: {
                        open: {$set: false},
                    }
                })
            }
        }
        default:
            return state;
    }
}
