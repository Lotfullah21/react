import { useEffect, useState, useSyncExternalStore } from "react";
import axios from "axios";

function FirstRequest() {
  const [isLoading, setLoading] = useState(false);
  const [followers, setFollowers] = useState([]);
  const [error, setError] = useState();
  const username = "Lotfullah21";
  const apiUrl = `https://api.github.com/users/${username}/following`;
  const token =
    "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";

  const headers = {
    Authorization: `Bearer ${token}`,
  };

  const fetchUrl = async () => {
    setLoading(true);
    try {
      const response = await axios.get(apiUrl, { headers });
      if (!response) {
        return;
      }
      const data = response.data;

      setFollowers(data);
      setLoading(false);
    } catch (error) {
      console.log(error.response);
      setError(error.response);

      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUrl();
  }, [username, apiUrl]);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      {followers.map((items) => {
        const { url, avatar_url, login, id } = items;
        return (
          <div key={id}>
            <img src={avatar_url}></img>
          </div>
        );
      })}
    </div>
  );
}

export default FirstRequest;
