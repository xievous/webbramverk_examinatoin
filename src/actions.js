// actions.js
export const UPDATE_CARD_INFO = "UPDATE_CARD_INFO";

export const updateCardInfo = (field, value) => ({
  type: UPDATE_CARD_INFO,
  payload: { field, value },
});
