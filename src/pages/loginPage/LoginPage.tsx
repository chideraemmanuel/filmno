import { useContext, useState } from "react";
import { authContext } from "../../contexts/authContext";
import "./LoginPage.scss";
import SignUpForm from "./components/signUpForm/SignUpForm";
import signUpIllustration from "../../assets/sign-up.svg";

const LoginPage = () => {
  return (
    <div className="login-page">
      <h2 className="login-page__header">Sign up to continue</h2>

      <div className="login-page__content">
        <div className="login-page__content--illustration">
          <img src={signUpIllustration} alt="Sign Up" />
        </div>

        <SignUpForm />
      </div>
    </div>
  );
};

export default LoginPage;
