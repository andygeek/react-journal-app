import React from "react";
import { Link } from "react-router-dom";

export const LoginScreen = () => {
  return (
    <>
      <h3 className="auth__title">Login</h3>
      <form>
        <input className="auth__input" type="text" placeholder="Email" name="email"/>
        <input className="auth__input" type="password" placeholder="Password" name="password"/>
        <button type="submit">Login</button>
        <hr/>
        <div>
          <p>Login with Google</p>
        </div>
        <Link to="/auth/register">
          Create new accoutn
        </Link>
      </form>
    </>
  );
};
