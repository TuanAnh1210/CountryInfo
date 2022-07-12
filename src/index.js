import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import store from "./components/Store";
import App from "./App";
import { ThemeProvider } from "./components/ThemeContext/ThemeContext";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
