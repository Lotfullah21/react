import { useState } from "react";

import FirstRequest from "./components/FirstRequest";
import DadJokeGet from "./components/DadJokeGet";
import OptionalChaining from "./components/basics/OptionalChaining";
import AndOperator from "./components/basics/AndOperator";
import DadJokeAcceptHeader from "./components/DadJokeAcceptHeader";
import PostJoke from "./components/basics/PostJoke";
import "./axios/global";
import RandomUser from "./components/RandomUser";
import CustomAxios from "./components/CustomAxios";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <OptionalChaining></OptionalChaining> */}
      {/* <AndOperator></AndOperator> */}
      {/* <FirstRequest></FirstRequest> */}
      {/* <DadJokeGet></DadJokeGet> */}
      {/* <DadJokeAcceptHeader></DadJokeAcceptHeader> */}
      {/* <PostJoke></PostJoke> */}
      {/* <RandomUser></RandomUser> */}
      <CustomAxios></CustomAxios>
    </>
  );
}

export default App;
