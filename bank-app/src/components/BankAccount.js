import { useSelector, useDispatch } from "react-redux";
import React from "react";

// importing action creators from redux action file
import * as actions from "./redux/acttions";

// import CSS for component
import "./BankAccount.css";

// Functional component bank account
const BankAccount = () => {
  // `useSelector` to access the current balance from the Redux state.
  const balance = useSelector((state) => state.balance);

  // `useDispatch` to create a reference to the Redux dispatch function.
  const dispatch = useDispatch();
};
