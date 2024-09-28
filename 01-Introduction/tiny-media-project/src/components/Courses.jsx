import VideoEmbed from "./VideoEmbed";
import { dataList } from "../assets/data";
const Courses = () => {
	return (
		<section>
			{dataList.map((courseData) => {
				return (
					<div key={courseData.id}>
						<h3>{courseData.title}</h3>
						<VideoEmbed videoURL={courseData.videoURL}></VideoEmbed>
					</div>
				);
			})}
		</section>
	);
};
export default Courses;
