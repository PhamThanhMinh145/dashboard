import React from "react";
import ReactDOM from "react-dom";
// import { Provider } from "react-redux";
// import store from "./redux/store";

import "./index.css";
import App from "./App";
import { ContextProvider } from "./contexts/ContextProvider";

ReactDOM.render(
  
    <ContextProvider>
      <App />
    </ContextProvider>,
  document.getElementById("root")
);
