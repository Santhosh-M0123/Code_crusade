import React from "react";
import { useState } from "react";
import "../styles/Login.css";

const Login = () => {
    const [name, setName] = useState("");
    const [pass, setPass] = useState("");

    const btnSignin = (e) => {
        e.preventDefault();

        console.log(name);
        console.log(pass);
    };

    return (
        <div className="loginContainer">
            <div className="bg"></div>

            <div className="form">
                <form>
                    {/* <!-- Email input --> */}
                    <div class="form-outline mb-4">
                        <label
                            class="form-label"
                            for="form2Example1">
                            Username
                        </label>
                        <input
                            type="text"
                            id="form2Example1"
                            class="form-control"
                            value={name}
                            onChange={(e) => {
                                setName(e.target.value);
                            }}
                        />
                    </div>

                    {/* <!-- Password input --> */}
                    <div class="form-outline mb-4">
                        <label
                            class="form-label"
                            for="form2Example2">
                            Password
                        </label>
                        <input
                            type="password"
                            id="form2Example2"
                            class="form-control"
                            value={pass}
                            onChange={(e) => {
                                setPass(e.target.value);
                            }}
                        />
                    </div>

                    {/* <!-- 2 column grid layout for inline styling --> */}
                    <div class="row mb-4">
                        <div class="col d-flex justify-content-center">
                            {/* <!-- Checkbox --> */}
                            <div class="form-check">
                                <input
                                    class="form-check-input"
                                    type="checkbox"
                                    value=""
                                    id="form2Example31"
                                    checked
                                />
                                <label
                                    class="form-check-label"
                                    for="form2Example31">
                                    {" "}
                                    Remember me{" "}
                                </label>
                            </div>
                        </div>

                        <div class="col">
                            <a href="#!">Forgot password?</a>
                        </div>
                    </div>

                    <button
                        className="btnLogin"
                        type="button"
                        class="btn btn-primary btn-block mb-4"
                        onClick={btnSignin}>
                        Log in
                    </button>

                    <div class="text-center">
                        <p>
                            Not a member? <a href="#!">Register</a>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
