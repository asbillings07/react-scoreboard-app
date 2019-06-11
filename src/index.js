import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "./components/Context";
import App from "./components/App";
import "./index.css";

ReactDOM.render(
  <Provider>
    <App />
  </Provider>,
  document.getElementById("root")
);
// provider is top level component. App is being passed to Provider as a child.
