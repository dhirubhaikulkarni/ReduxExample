export const depositmoney = (amount) => {
  return (dispatch) => {
    dispatch({
      type: "deposit",
      payload: amount,
    });
  };
};

export const withdrawmoney = (amount) => {
  return (dispatch) => {
    dispatch({
      type: "withdraw",
      payload: amount,
    });
  };
};

export const bulkdeposit = (amount) => {
  return (dispatch) => {
    dispatch({
      type: "bulkdeposit",
      payload: amount,
    });
  };
};

export const bulkwithdraw = (amount) => {
  return (dispatch) => {
    dispatch({
      type: "bulkwithdraw",
      payload: amount,
    });
  };
};
