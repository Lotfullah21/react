import useFetch from "./useFetch";

const url = `https://api.github.com/users/Lotfullah21`;

const ShowUsers = () => {
  const { data, loading, error } = useFetch(url);
  console.log(data);
  // Check if data exists and is not null
  if (!data) {
    return <p>Loading...</p>;
  }

  if (loading) {
    return <h1>Loading...</h1>;
  }
  if (error) {
    return <h1>error...</h1>;
  }
  const { login, avatar_url, following, html_url, location } = data;
  return (
    <div>
      <img src={avatar_url}></img>
      <h4>{login}</h4>
      <a href={html_url} target="_blank">
        {html_url}
      </a>
      <p>{following}</p>
      <p>{location}</p>
    </div>
  );
};
export default ShowUsers;
