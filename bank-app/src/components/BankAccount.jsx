import { useSelector, useDispatch } from "react-redux";
import React from "react";

// importing action creators from redux action file
import { deposit, withdraw } from "../redux/actions";

// import CSS for component
import "./BankAccount.css";

// Functional component bank account
const BankAccount = () => {
  // `useSelector` to access the current balance from the Redux state.
  const balance = useSelector((state) => state.balance);

  // `useDispatch` to create a reference to the Redux dispatch function.
  const dispatch = useDispatch();

  // Function to handle deposit: Asks user for an amount and dispatches the deposit action.
  const handleDeposit = () => {
    const amount = parseInt(prompt("Enter deposit amount:"));
    if (amount > 0) {
      dispatch(deposit(amount));
    }
  };

  // Function to handle withdraw: Asks user for an amount and dispatches the withdraw action.
  const handleWithdraw = () => {
    const amount = parseInt(prompt("Enter withdraw amount:"));
    if (amount > 0 && amount <= balance) {
      dispatch(withdraw(amount));
    }
  };

  // Rendering components
  return (
    <div className="bank-account">
      <h1>Bank Account</h1>
      <p>Current Balance:${balance}</p>
      <button onClick={handleDeposit}>Deposit</button>
      <button onClick={handleWithdraw}>Withdraw</button>
    </div>
  );
};

export default BankAccount;
