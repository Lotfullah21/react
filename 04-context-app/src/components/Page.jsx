import { useUser, UserProvider } from "./UserContext";

const Page = () => {
  const { user } = useUser();
  console.log(user);

  return (
    <div>
      <h3>Welcome to HoshmandLab</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum consequatur
        ea distinctio aspernatur minus ab consectetur deleniti facilis sed earum
        sunt accusantium aut cupiditate illo atque aliquid quas, placeat
        deserunt id neque beatae. Voluptas, ipsam nisi cumque laudantium minus
        aperiam!
      </p>
      <p>written by {user}</p>
    </div>
  );
};
export default Page;
