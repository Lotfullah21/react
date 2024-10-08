import React from "react";

const VideoEmbed = ({ videoId }) => {
	return (
		<div className="video-responsive">
			<iframe
				width="560"
				height="315"
				src={`https://www.youtube.com/embed/${videoId}`}
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
				allowFullScreen
				title="Embedded YouTube Video"
			/>
		</div>
	);
};

export default VideoEmbed;
