export function toggleRulesDialog() {
  return {
    type: 'TOGGLE_RULES_DIALOG',
    meta: {
      mixpanel: {
        event: 'Open rules Dialog',
      },
    },
  };
}

export function showSnackbar(message) {
  return {
    type: 'SHOW_SNACKBAR',
    payload: message,
  };
}

export function hideSnackbar() {
  return {
    type: 'HIDE_SNACKBAR',
  };
}
