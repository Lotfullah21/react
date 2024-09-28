import VideoEmbed from "./Courses/VideoEmbed";
import VideoComponent from "./Courses/VideoComponent";

const Courses = () => {
	const videoId = "dQw4w9WgXcQ"; // Replace with your YouTube video ID
	return (
		<div className="App">
			<h1>My YouTube Video</h1>
			<VideoEmbed videoId={videoId} />
			{/* <VideoComponent></VideoComponent> */}
		</div>
	);
};
export default Courses;
