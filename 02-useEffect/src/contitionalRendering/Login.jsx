import { useState } from "react";

const LogingLogOut = () => {
  const [user, setUser] = useState(null);

  const login = () => {
    setUser({ name: "MIT" });
  };
  const logOut = () => {
    setUser(null);
  };

  return (
    <>
      {user ? (
        <div>
          <h4>Hello there {user.name}</h4>
          <button onClick={logOut}>LogOut</button>
        </div>
      ) : (
        <div>
          <h4>Please Login</h4> <button onClick={login}>Login</button>
        </div>
      )}
    </>
  );
};

export default LogingLogOut;
