// Defining the initial state of the bank with a starting balance of 0.
const initialState = {
  balance: 0,
};

// Reducer for state changes
function bankReducer(state = initialState, acttion) {
  // Switch based on action type to handle diff outcomes
  switch (acttion.type) {
    case "DEPOSIT":
      return {
        ...state,
        balance: state.balance + acttion.payload,
      };

    case "WITHDRAW":
      return {
        ...state,
        balance: state.balance - acttion.payload,
      };
    default:
      return state;
  }
}

export default bankReducer;
