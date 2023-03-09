import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "./context/books";

const el = document.getElementById("root");
const root = ReactDOM.createRoot(el);

//render app inside of context to pass value
root.render(
  <Provider>
    <App />
  </Provider>
);
