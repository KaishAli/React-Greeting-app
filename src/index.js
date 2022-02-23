import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

let curDate = new Date(2022, 2, 2,8);
curDate = curDate.getHours();
let greeting = "";
const cssStyle = {};

if (curDate >= 1 && curDate < 12) {
  greeting = "Good Morning";
  cssStyle.color = "green";
} else if (curDate >= 12 && curDate < 19) {
  greeting = "Good Afternoon";
  cssStyle.color = "Orange";
} else {
  greeting = "Good Night";
  cssStyle.color = "Black";
}

ReactDOM.render(
  <>
    <div>
      <h1>
        HELLO KAISH ,<span style={cssStyle}> {greeting}</span>
      </h1>
    </div>
  </>,
  document.getElementById("root")
);
