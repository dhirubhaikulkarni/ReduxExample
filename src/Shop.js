import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "./State/index";

const Shop = () => {
  const dispatch = useDispatch();
  const action = bindActionCreators(actionCreators, dispatch);
  const [money, setMoney] = useState("");

  function changevalue(event) {
    let amounts = event.target.value;
    setMoney(parseInt(amounts));
  }
  console.log(money);

  return (
    <div>
      <label>Enter Amount: </label>
      <input
        type="number"
        placeholder="Enter The Amount"
        onChange={changevalue}
      />
      <br />
      <br />
      <button className="btn-primary" onClick={() => action.withdrawmoney(100)}>
        -
      </button>
      UPDATE BALANCE
      <button className="btn-primary" onClick={() => action.depositmoney(100)}>
        +
      </button>
      <br />
      <br />
      <button className="btn-primary" onClick={() => action.bulkwithdraw(500)}>
        Bulk Withdraw
      </button>
      <br />
      <br />
      <button className="btn-primary" onClick={() => action.bulkdeposit(money)}>
        Bulk Deposit
      </button>
    </div>
  );
};

export default Shop;
