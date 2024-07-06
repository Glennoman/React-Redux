// Import necessary modules from React and ReactDOM.
import React from "react";
import ReactDOM from "react-dom/client";

// Import the Redux provider to integrate the store with the React app.
import { Provider } from "react-redux";

// Import the configured Redux store.
import { store } from "./redux/store";

// Import the main App component.
import App from "./App";

// Import the global CSS file.
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
