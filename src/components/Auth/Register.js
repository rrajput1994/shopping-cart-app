import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import classes from "./Login.module.css";

import { auth } from "./firebase-config";

import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

const Register = () => {
  const history = useHistory();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("authUser");
    if (token) {
      history.push("/");
    }
  }, []);

  const registerHandler = async () => {
    setLoading(true);
    try {
      const user = await createUserWithEmailAndPassword(auth, email, password);
      updateProfile(auth.currentUser, { displayName: name });
      history.push("/login");
      setLoading(false);
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div className={classes["login-form"]}>
      <div className={classes["form-container"]}>
        <h2 className={classes["text-center"]}>Sign Up</h2>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
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
          <button onClick={registerHandler} className={classes.registerBtn}>
            {loading ? "Loading..." : "Sign Up"}
          </button>
        </div>
      </div>
      <p className="text-center">
        Already have account
        <Link to="/login"> Login!</Link>
      </p>
    </div>
  );
};
export default Register;
