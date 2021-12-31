import React from "react";
import createReactClass from "create-react-class";

let Controls = createReactClass({
  render: function () {
    let classNames;
    if (this.props.isPlaying === "pause") {
      classNames = "fa fa-fw fa-pause";
    } else {
      classNames = "fa fa-fw fa-play";
    }

    return (
      <div className="Controls">
        <div onClick={this.props.onClick} className="Button">
          <i className={classNames}></i>

          <span className="Button-Text">Play</span>
        </div>
      </div>
    );
  },
});

export default Controls;
