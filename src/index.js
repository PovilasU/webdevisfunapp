import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "./css/main.scss";
import Blazy from "blazy";
// import Blazy from "blazy";
console.log("loading  index js");

// (function() {
//   // Initialize
//   var bLazy = new Blazy();
// })();

var blazy = new Blazy({ selector: "img", offset: 100 });

ReactDOM.render(<App />, document.getElementById("app"));
