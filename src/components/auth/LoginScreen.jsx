import React from "react";
import { Link } from "react-router-dom";

export const LoginScreen = () => {
  return (
    <>
      <h3 className="auth__title">Login</h3>
      <form>
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
        <button className="btn btn-primary" type="submit" >Login</button>
        <div>
          <button className="btn btn-primary mt-1">Login with Google</button>
        </div>
        <div className="mt-5">
          <Link to="/auth/register">Create new accoutn</Link>
        </div>
      </form>
    </>
  );
};
