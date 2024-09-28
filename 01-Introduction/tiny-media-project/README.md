### What we are going to learn in in this project

- Libraries vs packages
- Media players (video)
- Using React Router library
- Keys in React
- props and state
  Some Packages and libraries to install

```ssh
npm create vite@latest app-name -- --template react
npm install react-router-dom
npm install uui
npm install react-player
```

## Library vs Package

- A `package` refers to a collection of files that provide some functionality and is published to a package manager (such as npm).
- A `library` is more specific and refers to a set of pre-written code that developers can use to perform common tasks.

## React query

- After installing the package, wrap the entire application around `<BrowseRouter>`.

```jsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</StrictMode>
);
```

- Create the routes in `./App.jsx`

```jsx
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomeLayout from "./components/HomeLayout";
import Courses from "./components/Courses";
function App() {
	return (
		<>
			<Navbar></Navbar>
			<Routes>
				<Route path="/" element={<HomeLayout></HomeLayout>}></Route>
				<Route path="/courses" element={<Courses></Courses>}></Route>
			</Routes>
		</>
	);
}
export default App;
```

## Embedding video

### Using ReactPlayer

- Videos can be embed using `ReactPlayer` package.

```jsx
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
```

### using iFrame

An iframe (short for inline frame) is an HTML element that allows you to embed another HTML page within the current page.

It’s commonly used to embed content from external sources, such as videos, advertisements, or other websites, into a webpage.

- Or `embed` also can be used

```jsx
import React from "react";

const VideoEmbed = ({ videoId }) => {
	return (
		<div className="video-responsive">
			<iframe
				width="560"
				height="315"
				src={`https://www.youtube.com/embed/${videoId}`}
				frameBorder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
				allowFullScreen
				title="Embedded YouTube Video"
			/>
		</div>
	);
};

export default VideoEmbed;
```

#### Key Attributes of <iframe>:

src: The URL of the content to embed.
width and height: Define the size of the iframe in pixels.
frameborder: Determines if the iframe has a border (0 for no border).
allowfullscreen: Allows the iframe content to enter fullscreen mode.
sandbox: Adds restrictions to what the content inside the iframe can do (e.g., no scripts, no

## Keys

It allows react to identify which element has changed, added or removed from the component.

- Keys help React determine which items have changed, are added or are removed.
- Keys instruct React how to treat a specific element when an update occurs.
- Keys instruct React about whether a specific element’s internal state should be preserved or not.

### Diffing algorithm

React uses diffing algorithm to calculate the difference in state and perform the re-rendering only to the part of the application that its states have changed.

## Props and state

These are plain javascript objects that react uses to hold the information.
Props(properties) are passed via components, immutable.
Sate is managed within a component, states causes the re-render of the component.
State is a plain JavaScript object that React uses to hold information.

### Stateful components usage

- For client-server communication
- Data processing
- Responding to user events

### Stateless Components

- Visualization
- Formatting logic
