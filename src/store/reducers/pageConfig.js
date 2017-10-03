import update from 'immutability-helper';

export default function reducer(state = {
  buyingDialog: {
    open: false,
  },
  snackBar: {
    message: '',
    open: false,
  },
}, action) {
  switch (action.type) {
    case 'TOGGLE_BUYING_DIALOG': {
      if (state.buyingDialog.open === false) {
        return update(state, {
          buyingDialog: {
            open: { $set: true },
          },
        });
      }
      return update(state, {
        buyingDialog: {
          open: { $set: false },
        },
      });
    }
    case 'TOGGLE_SNACKBAR': {
      return {
        ...state,
        snackBar: {
          message: action.payload,
          open: true,
        },
      };
    }
    default:
      return state;
  }
}
