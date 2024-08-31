## Axios package

Axios is a popular JavaScript library used to make HTTP requests, particularly in web applications.
It's often used for fetching data from APIs, submitting form data, or sending data to a server. Axios simplifies the process of working with HTTP requests by providing a clean, promise-based API, making it easier to handle asynchronous operations.

## Key Features:

- Promise-Based: Axios uses promises, which allows for easier management of asynchronous requests and handling of responses and errors.
  Browser and Node.js Support: Axios works in both the browser and Node.js environments, making it versatile for different types of applications.
- Automatic Data Transformation: It automatically converts JSON data to JavaScript objects when receiving responses and can send data in various formats, including JSON and URL-encoded form data.
- Interceptors: Axios allows you to intercept and modify requests or responses before they are handled, which is useful for adding headers, logging, or handling errors globally.
- Cancel Requests: You can cancel ongoing requests using a CancelToken.
  Timeouts: You can set time limits on requests, after which they will be automatically aborted.

### Common Use Cases:

#### Fetching Data:

Axios is often used to retrieve data from APIs, like RESTful services.
Submitting Forms: It can be used to send form data to a server.

#### Handling Authentication:

Axios is commonly used to manage tokens and session data in web applications.

#### Installation

Using npm:

```sh
npm install axios
```

For vanilla javascript
Using CDN

```sh
<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
```

## Key points

1. It returns a promise
2. Response data located in data object.
3. Error is located in error.response

# First example

```js
import { useEffect } from "react";
import axios from "axios";

const url = "https://www.course-api.com/react-tours-project";

const FirstRequest = () => {
	const fetchData = async () => {
		try {
			const response = await axios(url);
			console.log(response);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		fetchData();
	}, []);

	return <div>FirstRequest</div>;
};
export default FirstRequest;
```

The data lives in `data` property of the response and can be accessed using `response.data`

```js
import { useEffect } from "react";
import axios from "axios";

const url = "https://www.course-api.com/react-tours-project";

const FirstRequest = () => {
	const fetchData = async () => {
		try {
			const response = await axios(url);
			const data = response.data;
			console.log("response", response);
			console.log("data", data);
			console.log("data using .", response.data);
		} catch (error) {
			console.log(error.response;
		}
	};

	useEffect(() => {
		fetchData();
	}, []);

	return <div>FirstRequest</div>;
};
export default FirstRequest;
```

Axios treats all the errors as errors unlike `fetch()` method that only counted the network error as the error.

# Headers

headers are used to pass additional information along with our HTTP requests. These headers can include authentication tokens, content types, custom application logic, and more.

Headers are sent as part of the HTTP request and can also be received as part of the HTTP response.

- We pass the header as the second argument to the `axios`.
- Use `axios.get(url , {})`

## 1. Per-Request Headers

Headers individually for specific requests.

The Accept header in an HTTP request specifies the media types (or content types) that the client is willing to receive in the response from the server. Essentially, it tells the server what kind of data format the client can handle.

### How It Works:

When a client (like a browser or an app) sends a request to a server, it includes the Accept header to inform the server of the type of content it expects. The server then tries to respond with the content in one of the specified formats. If the server can provide the content in a format that matches the Accept header, it does so. If not, the server might respond with a different format or return an error, like a 406 Not Acceptable status, indicating that the server cannot provide the requested format.

This is particularly useful in APIs and web services where multiple formats like JSON, XML, or HTML might be available.

### Common Media Types:

1. application/json: Indicates that the client expects JSON-formatted data.
2. text/html: Indicates that the client expects HTML content, typically used for web pages.
3. application/xml: Indicates that the client expects XML-formatted data.
4. text/plain: Indicates that the client expects plain text.

```js
axios
	.get("https://api.example.com/data", {
		headers: {
			Accept: "application/json",
		},
	})
	.then((response) => {
		console.log(response.data); // The response will be in JSON format
	})
	.catch((error) => {
		console.error("Error:", error);
	});
```

## Post Request

- It sends the data to the server
- axios.post(url, {header})
-

### GLobal Default Setup

if we want some properties to be attached to each of our request, we can set a global setup.
For each of the request, those requests also will be attached.

How to setup a global axios setup.

- Create a folder with the name of `axios`
- Add files and inside each file, define the setup
- Import the file in `App.jsx`
- Now, all the requests made by axios will have the defaults setups we have defined earlier.

```js
-axios -> global.js;


import axios from "axios";
axios.defaults.headers["Accept"] = "application/json";
```

```js
import axios from "axios";

const AuthFetch = axios.create({
	baseURL: "https://api.github.com",
	headers: {
		Accept: "application/json",
	},
});
export default AuthFetch;
```

in the above snippet, only the calls we make using "AuthFetch" will have this header.

it has one downside and that is the setup will be applied to all requests we are sending and we might do not want this for every request.

what to do ?

Define a custom axios, and call that on the requests you want have those specification.

## Custom Request

```js
import axios from "axios";

const AuthFetch = axios.create({
	baseURL: "https://api.github.com",
	headers: {
		Accept: "application/json",
	},
});
export default AuthFetch;
```

```js
import axios from "axios";
import AuthFetch from "../axios/AuthFetch";
import { useEffect } from "react";
const CustomAxios = () => {
	const username = "karpathy";
	const RandomUserUrl = "https://randomuser.me/api/";
	const fetchUser = async () => {
		try {
			const response = await AuthFetch(`/users/${username}/following`);
			const response1 = await axios(RandomUserUrl);
			console.log(response);
		} catch (error) {
			console.log(error.response);
		}
	};

	useEffect(() => {
		fetchUser();
	}, []);

	return <div>CustomAxios</div>;
};
export default CustomAxios;
```

```js
const response = await AuthFetch(`/users/${username}/following`);
const response1 = await axios(RandomUserUrl);
```

Now for the given two requests, we make two different kinds of requests one with custom properties and the other one with default properties.
