import React from "react";
let createReactClass = require("create-react-class");

let Scrubber = createReactClass({
  render: function () {
    return (
      <div className="Scrubber">
        <div className="Scrubber-Progress"></div>
      </div>
    );
  },
});

export default Scrubber;
