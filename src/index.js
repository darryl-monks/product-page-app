import React from "react";
import ReactDOM from "react-dom";
import "normalize.css";
import "./index.scss";
import Product from "./components/Product/Product";

ReactDOM.render(
  <React.StrictMode>
    <Product />
  </React.StrictMode>,

  document.getElementById("root")
);
