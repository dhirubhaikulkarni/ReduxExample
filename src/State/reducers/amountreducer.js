const reducer = (state = 500, action) => {
  if (action.type === "deposit") {
    return state + action.payload;
  } else if (action.type === "withdraw") {
    if (state > 100) {
      return state - action.payload;
    } else {
      alert("You balance is not sufficient!!!!!!");
    }
  } else if (action.type === "bulkdeposit") {
    return state + action.payload;
  } else if (action.type === "bulkwithdraw") {
    if (state > 800) {
      return state - action.payload;
    } else {
      alert("You balance is not sufficient!!!!!!");
    }
  } else {
    return state;
  }
};

export default reducer;
