import React, { Component } from "react";
import video from "../images/movie.mp4";

class Video extends Component {
    render() {
        return (
            <div className="video">
                <video src={video} width="300" height="600" controls="controls" autoplay="true" />
            </div>
        );
    }
}

export default Video;