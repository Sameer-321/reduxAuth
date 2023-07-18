import { useSelector } from "react-redux";
import { selectCurrentUser, selectCurrentToken } from "./authSlice";

const Welcome = () => {
  const user = useSelector(selectCurrentUser);
  const token = useSelector(selectCurrentToken);
  const welcome = user ? `Welcome ${user}!` : Welcome;
  const tokenAbbr = `${token.slice(0, 9)}...`;
  const content = (
    <div>
      <h1>{welcome}</h1>
      <p>Token:{tokenAbbr}</p>
      <p>
        <Link to="/userList">Go to user Lists</Link>{" "}
      </p>
    </div>
  );
  return <div>{content}</div>;
};

export default Welcome;
