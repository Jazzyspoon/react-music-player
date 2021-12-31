import React from "react";
import TrackInformation from "../trackinformation/trackinformation";
import Scrubber from "../scrubber/scrubber";
import Controls from "../controls/controls";
import Timestamps from "../timestamps/timestamps";
let createReactClass = require("create-react-class");
// Player
let Player = createReactClass({
  getInitialState: function () {
    return {
      playStatus: "play",
      currentTime: 0,
    };
  },
  getDefaultProps: function () {
    return {
      track: {
        name: "Colder Winter",
        artist: "Jazzyspoon",
        album: "Circle When Finished",
        year: 2010,
        artwork: "https://m.media-amazon.com/images/I/716N2smz06L._SS500_.jpg",
        duration: 342,
        source:
          "http://jazzyspoon.com/tools/Jazzyspoon%20-%20Circle%20When%20Finished%20-%20%20Colder%20Winter.mp3",
      },
    };
  },
  updateTime: function (timestamp) {
    timestamp = Math.floor(timestamp);
    this.setState({ currentTime: timestamp });
  },
  updateScrubber: function (percent) {
    // Set scrubber width
    let innerScrubber = document.querySelector(".Scrubber-Progress");
    innerScrubber.style["width"] = percent;
  },
  togglePlay: function () {
    let status = this.state.playStatus;
    let audio = document.getElementById("audio");
    if (status === "play") {
      status = "pause";
      audio.play();
      let that = this;
      setInterval(function () {
        let currentTime = audio.currentTime;
        let duration = that.props.track.duration;

        // Calculate percent of song
        let percent = (currentTime / duration) * 100 + "%";
        that.updateScrubber(percent);
        that.updateTime(currentTime);
      }, 100);
    } else {
      status = "play";
      audio.pause();
    }
    this.setState({ playStatus: status });
  },
  render: function () {
    return (
      <div className="Player">
        <div
          className="Background"
          style={{ backgroundImage: "url(" + this.props.track.artwork + ")" }}
        ></div>
        <div className="Header">
          <div className="Title">Now playing</div>
        </div>
        <div
          className="Artwork"
          style={{ backgroundImage: "url(" + this.props.track.artwork + ")" }}
        ></div>
        <TrackInformation track={this.props.track} />
        <Scrubber />
        <Controls isPlaying={this.state.playStatus} onClick={this.togglePlay} />
        <Timestamps
          duration={this.props.track.duration}
          currentTime={this.state.currentTime}
        />
        <audio id="audio">
          <source src={this.props.track.source} />
        </audio>
      </div>
    );
  },
});
export default Player;
