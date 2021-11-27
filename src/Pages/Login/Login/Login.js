import React, { useState } from "react";
import { useHistory, useLocation } from "react-router";
import { NavLink } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const Login = () => {
  const {
    handleUserLogin,
    signInUsingGoogle
  } = useAuth();

  const [loginData, setLoginData] = useState({});

  const location = useLocation();
  const history = useHistory();

  const handleGoogleLogin = () => {
    signInUsingGoogle(location, history)

  }

  const handleOnChange = e => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  }


  const handleLogin = e => {
    alert('Successfully Login');
    handleUserLogin(loginData.email, loginData.password, location, history);

    e.preventDefault();
  }

  return (
    <div className="div d-flex justify-content-center align-items-center py-5">
      <div className="row ">
        <div className="col-md-6">
          <div>
            <form onSubmit={handleLogin} className="form-input mt-5">
              <input
                onChange={handleOnChange}
                className="mt-2 p-2"
                type="email"
                name="email"
                placeholder="Email"
              />
              <br />
              <input
                onChange={handleOnChange}
                className="mt-2 p-2"
                type="password"
                name="password"
                placeholder="Password(6Character)"
              />
              <br />
              <div className="login-regiater-btn mt-4">
                <NavLink style={{ textDecoration: 'none', width: '75%', m: 1 }} to="/register">
                  <button

                    className="btn btn-primary me-1"
                  >
                    Register
                  </button>
                </NavLink>
                <button type='submit' className="btn btn-success ms-1">
                  Login
                </button>
              </div>
            </form>
            <div className="login-btn mt-4">
              <button
                onClick={handleGoogleLogin}
                className="btn btn-warning m-2"
              >
                Google SignIn
              </button>

            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="right-side-image">
            <img
              className="w-100"
              src="https://www.narchar.com/assets/images/login-img.png"
              alt=""
            />
          </div>
          ;
        </div>
      </div>
    </div>
  );
};

export default Login;
