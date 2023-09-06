import { useEffect, useState } from "react";
import axios from "axios";
import { set } from "mongoose";

const DadJokeGet = () => {
  const [joke, setJokes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);
  const url = "https://v2.jokeapi.dev/joke/Any";
  const headers = {
    Accept: "application/json",
  };
  const fetchUrl = async () => {
    try {
      const response = await axios.get(url, { headers });
      if (!response) {
        return;
      }
      const data = response.data;
      if (data.type === "single") {
        setJokes(data.joke);
      } else if (data.type === "twopart") {
        setJokes(`${data.setup} ${data.delivery}`);
      }
      setData(data);
      setIsLoading(false);
      console.log(data);
    } catch (error) {
      console.log(error.response);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchUrl();
  }, []);

  return (
    <article>
      <h1>{data?.category || "No Category"}</h1>
      <h5>{joke}</h5>
    </article>
  );
};
export default DadJokeGet;
