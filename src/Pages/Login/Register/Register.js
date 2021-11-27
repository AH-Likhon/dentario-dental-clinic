import React, { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Register = () => {
    const [loginData, setLoginData] = useState({});
    const history = useHistory();

    const { handleUserRegister } = useAuth();

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }

    const handleLoginSubmit = e => {
        console.log(loginData);
        if (loginData.password1 !== loginData.password2) {
            alert("Your password didn't match");
            return;
        }
        if (loginData.password1 === loginData.password2) {
            alert("Successfully registered");
            handleUserRegister(loginData.email, loginData.password1, loginData.name, history);
        }


        e.preventDefault();
    }

    return (
        <div className="div d-flex justify-content-center align-items-center py-5">
            <div className="row ">
                <div className="col-md-6">
                    <div>
                        <form onSubmit={handleLoginSubmit} className="form-input mt-5">
                            <input
                                onChange={handleOnChange}
                                className="mt-2 p-2"
                                type="text"
                                name="name"
                                placeholder="Enter Your Name"
                            />
                            <br />
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
                                name="password1"
                                placeholder="Enter Your Password"
                            />
                            <br />
                            <input
                                onChange={handleOnChange}
                                className="mt-2 p-2"
                                type="password"
                                name="password2"
                                placeholder="Re-type your password"
                            />
                            <br />
                            <div className="login-regiater-btn mt-4">
                                <button

                                    className="btn btn-primary me-1"
                                    type="submit"
                                >
                                    Register
                                </button>
                                <NavLink style={{ textDecoration: 'none', width: '75%', m: 1 }} to="/login">
                                    <button className="btn btn-success ms-1" >Already Registered? Please Login</button>
                                </NavLink>
                            </div>
                        </form>
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

export default Register;