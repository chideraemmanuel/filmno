import { Link } from "react-router-dom";
import "./User.scss";
import { FiUserPlus } from "react-icons/fi";

const isLoggedIn = false;

const User = () => {
  return (
    <>
      {!isLoggedIn ? (
        <Link to="/login" className="user__logged-out">
          <FiUserPlus />
        </Link>
      ) : (
        <div className="user__logged-in"></div>
      )}
    </>
  );
};

export default User;
