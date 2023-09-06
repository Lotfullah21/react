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
