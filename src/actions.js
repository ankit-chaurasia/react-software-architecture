export const counterButtonClicked = (amount = 1) => ({
  type: 'COUNTER_BUTTON_CLICKED',
  payload: { amount },
});
