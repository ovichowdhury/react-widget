import React from "react";
import ReactDom from "react-dom";
import App from "./App";

export class FPWidget {
  constructor(domId) {
    this.domId = domId;
  }

  init() {
    const element = document.getElementById(this.domId);
    ReactDom.render(<App />, element);
  }
}
