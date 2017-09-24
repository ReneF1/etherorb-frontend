function startTimer(timestamp, id) {
  return {
    type: 'START_TIMER',
    payload: {
      id,
      timestamp,
    },
  };
}

export default startTimer;
