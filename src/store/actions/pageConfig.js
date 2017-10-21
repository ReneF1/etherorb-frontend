export function openPage(pageName) {
  return {
    type: 'OPEN_PAGE',
    payload: pageName,
  };
}

export function toggleRulesDialog() {
  return {
    type: 'TOGGLE_RULES_DIALOG',
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
