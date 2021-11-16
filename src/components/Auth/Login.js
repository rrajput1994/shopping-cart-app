import React from "react";
import classes from "./Login.module.css";
const Login = () => {
  return (
    <div className={classes["login-form"]}>
      <form>
        <h2 className={classes["text-center"]}>Log in</h2>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input type="email" className="form-control" />
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input type="password" className="form-control" />
        </div>

        <div class="d-grid gap-2 mb-3">
          <button type="submit" className="btn btn-primary">
            Log in
          </button>
        </div>
        <div className="d-flex align-item-center justify-content-between">
          <label className="float-left form-check-label">
            <input type="checkbox" /> Remember me
          </label>
          <a href="/" className="float-right">
            Forgot Password?
          </a>
        </div>
      </form>
      <p className="text-center">
        <a href="/">Create an Account</a>
      </p>
    </div>
  );
};

export default Login;
