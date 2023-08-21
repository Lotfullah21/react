import { useUser, UserProvider } from "./UserContext";

const LoggedInUser = () => {
  const { user } = useUser();
  return <div>You are authenticated {user}</div>;
};
export default LoggedInUser;
