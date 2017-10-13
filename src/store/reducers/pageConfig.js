import update from 'immutability-helper';

export default function reducer(state = {
  rulesDialog: {
    open: false,
  },
  snackBar: {
    message: '',
    open: false,
  },
}, action) {
  switch (action.type) {
    case 'TOGGLE_RULES_DIALOG': {
      if (state.rulesDialog.open === false) {
        return update(state, {
          rulesDialog: {
            open: { $set: true },
          },
        });
      }
      return update(state, {
        rulesDialog: {
          open: { $set: false },
        },
      });
    }
    case 'SHOW_SNACKBAR': {
      return {
        ...state,
        snackBar: {
          message: action.payload,
          open: true,
        },
      };
    }
    case 'HIDE_SNACKBAR': {
      return {
        ...state,
        snackBar: {
          message: '',
          open: false,
        },
      };
    }
    default:
      return state;
  }
}
