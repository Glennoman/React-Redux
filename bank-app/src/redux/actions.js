// Action creator for deposit: returns action with type DEPOSIT and the amount
export const deposit = (amount) => {
  return {
    type: "DEPOSIT",
    payload: amount,
  };
};

// Action creator for withdraw: returns an action with type 'WITHDRAW' and the amount to withdraw.
export const withdraw = (amount) => {
  return {
    type: "WITHDRAW",
    payload: amount,
  };
};
