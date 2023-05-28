import { Link } from "react-router-dom";
import "./User.scss";
import { FiUserPlus } from "react-icons/fi";
import { useContext } from "react";
import { authContext } from "../../contexts/authContext";

// const isLoggedIn = false;

const User = () => {
  const { isLoggedIn, setIsLoggedIn, user, setUser } = useContext(authContext);

  return (
    <>
      {!isLoggedIn ? (
        <Link to="/login" className="user__logged-out">
          <FiUserPlus />
        </Link>
      ) : (
        <div className="user__logged-in">HI</div>
      )}
    </>
  );
};

export default User;
