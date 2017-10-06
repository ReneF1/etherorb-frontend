export function toggleBuyingDialog() {
  return {
    type: 'TOGGLE_BUYING_DIALOG',
  };
}

export function toggleSnackbar(message) {
  return {
    type: 'TOGGLE_SNACKBAR',
    payload: message,
  };
}
