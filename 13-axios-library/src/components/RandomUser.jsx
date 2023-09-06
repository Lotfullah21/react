import axios from "axios";
import { useEffect } from "react";

const RandomUser = () => {
  const RandomUserUrl = "https://randomuser.me/api/";
  const fetchUser = async () => {
    const response = await axios.get(RandomUserUrl);
    console.log("response", response);
    const data = response.data;
    console.log("data", data);
  };

  useEffect(() => {
    fetchUser();
  }, [RandomUserUrl]);

  return <div>RandomUser</div>;
};
export default RandomUser;
