import UserContainer from "./UserContainer";
const NavLinks = () => {
  return (
    <>
      <div className="links-container">
        <ul className="links">
          <li>
            {" "}
            <a href="#">home</a>
          </li>
          <li>
            {" "}
            <a href="#">about</a>
          </li>
          <li>
            {" "}
            <a href="#">contact</a>
          </li>
        </ul>
      </div>
      <UserContainer></UserContainer>
    </>
  );
};
export default NavLinks;
