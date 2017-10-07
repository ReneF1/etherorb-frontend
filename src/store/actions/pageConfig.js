export function toggleRulesDialog() {
  return {
    type: 'TOGGLE_RULES_DIALOG',
  };
}

export function toggleSnackbar(message) {
  return {
    type: 'TOGGLE_SNACKBAR',
    payload: message,
  };
}
