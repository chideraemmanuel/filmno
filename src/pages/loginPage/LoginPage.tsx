import { useContext, useState } from "react";
import { authContext } from "../../contexts/authContext";
import "./LoginPage.scss";
import SignUpForm from "./components/signUpForm/SignUpForm";

const LoginPage = () => {
  return (
    <div className="login-page">
      <h2 className="login-page__header">Sign up to continue</h2>

      <div className="login-page__content">
        <div className="login-page__content--illustration"></div>
        {/* <form
          className="login-page__content--form"
          onSubmit={(e) => handleSubmit(e)}
        >
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

          <button className="login-page__content--form_button">Sign Up</button>
        </form> */}
        <SignUpForm />
      </div>
    </div>
  );
};

export default LoginPage;
