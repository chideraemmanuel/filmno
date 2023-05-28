import "./LoginPage.scss";

const LoginPage = () => {
  return (
    <div className="login-page">
      <h2 className="login-page__header">Sign up to continue</h2>

      <div className="login-page__content">
        <div className="login-page__content--illustration"></div>
        <form className="login-page__content--form">
          <label htmlFor="first-name">
            <span>First Name</span>
            <input
              type="text"
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
              name="email"
              id="email"
              placeholder="Enter Email"
              required
            />
          </label>

          <button className="login-page__content--form_button">Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
