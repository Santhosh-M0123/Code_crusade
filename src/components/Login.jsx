import React from "react";
import { useState } from "react";
import "../styles/Login.css";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import {toast ,ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const [name, setName] = useState("");
    const [pass, setPass] = useState("");

    let Navigateto = useNavigate();

    const btnSignin = async (e) => {
        e.preventDefault();

        if(name == '' || pass == ""){
            toast.warn("Please Enter all the field");
        }else{
            let res = await axios.post("http://localhost:3001/auth/" , {
            name : name,
            pass : pass
        });
        // console.log(res.status);
        if(res.status != 200){
            toast.warn("No user found");
        }else{
            Navigateto("/home");
        }
        }
    };

    let Navigate = () => {
        Navigateto("/register");
    }

    return (
        <div className="loginContainer">
            <ToastContainer />
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
                            Not a member? <a href="#!" onClick={Navigate}>Register</a>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
