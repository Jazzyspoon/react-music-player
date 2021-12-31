import React from "react";
import createReactClass from "create-react-class";

let Timestamps = createReactClass({
  convertTime: function (timestamp) {
    let minutes = Math.floor(timestamp / 60);
    let seconds = timestamp - minutes * 60;
    if (seconds < 10) {
      seconds = "0" + seconds;
    }
    timestamp = minutes + ":" + seconds;
    return timestamp;
  },
  render: function () {
    return (
      <div className="Timestamps">
        <div className="Time Time--current">
          {this.convertTime(this.props.currentTime)}
        </div>
        <div className="Time Time--total">
          {this.convertTime(this.props.duration)}
        </div>
      </div>
    );
  },
});

export default Timestamps;
