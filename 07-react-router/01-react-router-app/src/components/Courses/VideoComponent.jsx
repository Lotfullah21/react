import React from "react";
import ReactPlayer from "react-player/youtube";

const VideoComponent = () => {
	return (
		<div className="player-wrapper">
			<ReactPlayer
				className="react-player"
				url="https://www.youtube.com/watch?v=vGOUo95pisk"
				controls={true}
				width="80%"
				height="80%"
			/>
		</div>
	);
};

export default VideoComponent;
