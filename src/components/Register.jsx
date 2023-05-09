import React from "react";
import { useState } from "react";
import "../styles/Register.css";

const Register = () => {
    const [name, setName] = useState("");
    const [pass, setPass] = useState("");
    const [position, setPosition] = useState("");
    const [comName, setComName] = useState("");
    const [profilePic, setProfilePic] = useState();
    const [nextForm, setnextForm] = useState(false);
    const [preForm, setPreForm] = useState(true);

    const btnRegister = (e) => {
        e.preventDefault();

        console.log(name);
        console.log(pass);
    };
    return (
        <div className="RegisterContainer">
            <div className="bg"></div>
            <div className="form">
                <form>
                    {preForm && (
                        <>
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

                            <button
                                className="btnLogin"
                                type="button"
                                class="btn btn-primary btn-block mb-4"
                                onClick={() => {
                                    setnextForm(true);
                                    setPreForm(false);
                                }}>
                                Next
                            </button>
                        </>
                    )}

                    {nextForm && (
                        <>
                            <div class="form-outline mb-4">
                                <label
                                    class="form-label"
                                    for="form2Example1">
                                    Position
                                </label>
                                <input
                                    type="text"
                                    id="form2Example1"
                                    class="form-control"
                                    value={position}
                                    onChange={(e) => {
                                        setPosition(e.target.value);
                                    }}
                                />
                            </div>

                            <div class="form-outline mb-4">
                                <label
                                    class="form-label"
                                    for="form2Example1">
                                    Company Name
                                </label>
                                <input
                                    type="text"
                                    id="form2Example1"
                                    class="form-control"
                                    value={comName}
                                    onChange={(e) => {
                                        setComName(e.target.value);
                                    }}
                                />
                            </div>

                            <div class="mb-3">
                                <label
                                    for="formFile"
                                    class="form-label">
                                    Profile image
                                </label>
                                <input
                                    class="form-control"
                                    type="file"
                                    id="formFile"
                                    value={profilePic}
                                />
                            </div>

                            <button
                                className="btnLogin"
                                type="button"
                                class="btn btn-primary btn-block mb-4"
                                onClick={() => {
                                    setnextForm(false)
                                    setPreForm(true)
                                }}>
                                Back
                            </button>

                            <button
                                className="btnLogin"
                                type="button"
                                class="btn btn-primary btn-block mb-4"
                                onClick={btnRegister}>
                                Log in
                            </button>

                            <div class="text-center">
                                <p>
                                    Not a member? <a href="#!">Register</a>
                                </p>
                            </div>
                        </>
                    )}
                </form>
            </div>
        </div>
    );
};

export default Register;
