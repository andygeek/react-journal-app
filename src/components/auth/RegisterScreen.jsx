import React from "react";
import { Link } from "react-router-dom";

export const RegisterScreen = () => {
  return (
    <>
      <h3 className="auth__title">Register</h3>
      <form>
        <input
          className="auth__input"
          type="text"
          placeholder="Name"
          name="name"
          autoComplete="off"
        />
        <input
          className="auth__input"
          type="text"
          placeholder="Email"
          name="email"
          autoComplete="off"
        />
        <input
          className="auth__input"
          type="password"
          placeholder="Password"
          name="password"
          autoComplete="off"
        />
        <input
          className="auth__input"
          type="password"
          placeholder="Confirm"
          name="password2"
          autoComplete="off"
        />
        <button className="btn btn-primary" type="submit">
          Register
        </button>
        <div className="mt-1">
          <Link to="/auth/login" className="link" >
            Already register?
          </Link>
        </div>
      </form>
    </>
  );
};
