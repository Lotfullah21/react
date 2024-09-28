import ReactPlayer from "react-player/youtube";

const VideoEmbed = ({ videoURL }) => {
	return (
		<div className="video-wrapper">
			<ReactPlayer
				className="react-player"
				url={videoURL}
				width="70%"
				height="70%"
				controls={true}
				muted={false}
			/>
		</div>
	);
};

export default VideoEmbed;
