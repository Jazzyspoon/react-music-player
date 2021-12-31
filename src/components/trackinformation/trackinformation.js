import React from "react";
let createReactClass = require("create-react-class");

var TrackInformation = createReactClass({
  render: function () {
    return (
      <div className="TrackInformation">
        <div className="Name">{this.props.track.name}</div>
        <div className="Artist">{this.props.track.artist}</div>
        <div className="Album">
          {this.props.track.album} ({this.props.track.year})
        </div>
      </div>
    );
  },
});

export default TrackInformation;
