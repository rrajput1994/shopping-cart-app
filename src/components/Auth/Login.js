import React, { useState, useContext, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { auth } from "./firebase-config";
import { signInWithEmailAndPassword } from "firebase/auth";
import classes from "./Login.module.css";

const Login = (props) => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("authUser");
    if (token) {
      history.push("/");
    }
  }, []);

  const loginHandler = async () => {
    try {
      const user = await signInWithEmailAndPassword(auth, email, password);
      localStorage.setItem("authUser", user._tokenResponse.idToken);
      history.push("/");
    } catch (error) {
      console.log(error.message);
    }
  };

  // const user = auth.currentUser;
  // console.log(user);

  return (
    <div className={classes["login-form"]}>
      <div className={classes["form-container"]}>
        <h2 className={classes["text-center"]}>Log in</h2>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="d-grid gap-2 mb-3">
          <button onClick={loginHandler} className={classes.loginBtn}>
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
      </div>
      <p className="text-center">
        <Link to="/register">Create New Account!</Link>
      </p>
    </div>
  );
};

export default Login;
