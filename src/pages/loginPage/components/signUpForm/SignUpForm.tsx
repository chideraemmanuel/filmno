import { useContext, useState } from "react";
import "./SignUpForm.scss";
import { authContext } from "../../../../contexts/authContext";
import { AuthUser } from "../../../../contexts/utilities/contextTypes";

// interface AuthUser {
//   firstName: string;
//   lastName: string;
//   email: string;
// }

const SignUpForm = () => {
  const { isLoggedIn, setIsLoggedIn, user, setUser } = useContext(authContext);

  const [userInput, setUserInput] = useState<AuthUser>({
    firstName: "",
    lastName: "",
    email: "",
  });

  const clearInput = () => {
    setUserInput({
      firstName: "",
      lastName: "",
      email: "",
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setUser(userInput);
    setIsLoggedIn(true);
    clearInput();
    // NAVIGATE TO PREVIOUS PAGE AFTER SIGNUP
  };

  //   console.log("user", user);
  // console.log("input", userInput);

  return (
    <form className="sign-up-form" onSubmit={(e) => handleSubmit(e)}>
      <label htmlFor="first-name">
        <span>First Name</span>
        <input
          type="text"
          value={userInput.firstName}
          onChange={(e) =>
            setUserInput({ ...userInput, firstName: e.target.value })
          }
          name="first-name"
          id="first-name"
          placeholder="Enter First Name"
          required
        />
      </label>
      <label htmlFor="last-name">
        <span>Last Name</span>
        <input
          type="text"
          value={userInput.lastName}
          onChange={(e) =>
            setUserInput({ ...userInput, lastName: e.target.value })
          }
          name="last-name"
          id="last-name"
          placeholder="Enter Last Name"
          required
        />
      </label>
      <label htmlFor="email">
        <span>Email Address</span>
        <input
          type="email"
          value={userInput.email}
          onChange={(e) =>
            setUserInput({ ...userInput, email: e.target.value })
          }
          name="email"
          id="email"
          placeholder="Enter Email"
          required
        />
      </label>

      <button className="sign-up-form__button">Sign Up</button>
    </form>
  );
};

export default SignUpForm;
