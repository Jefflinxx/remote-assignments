import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Header from "./Header";
import Content from "./Content";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Header />
    <Content />
  </React.StrictMode>
);
