import { useState } from "react";
import BankAccount from "./components/BankAccount";
import "./components/BankAccount.css";

function App() {
  return (
    <div className="App">
      {/* Render the BankAccount component */}
      <BankAccount />
    </div>
  );
}

export default App;
