import React, { useState } from 'react'
import Navbar from '../Navbar/Navbar'
import { useHistory } from "react-router-dom"

import "./Register.css"

function Register({ signedIn, setSignedIn, showRight }) {
    const history = useHistory()

    const [name, setName] = useState("")
    const [errName, setErrName] = useState("");

    const [email, setEmail] = useState("")
    const [errEmail, setErrEmail] = useState("");

    const [createPass, setCreatePass] = useState("")

    const [confirmPass, setConfirmPass] = useState("")
    const [errPassword, setErrPassword] = useState("");

    const [skills, setSkills] = useState("")

    const register = () => {

        if (!name.length) {
            setErrName("The field is mandatory")
            setErrEmail("")
            setErrPassword("")
            return;
        }

        if (!email.length) {
            setErrEmail("The field is mandatory")
            setErrName("")
            setErrPassword("")
            return;
        }

        if (!createPass.length || !confirmPass.length) {
            setErrPassword("The field is mandatory")
            setErrEmail("")
            setErrName("")
            return;
        }

        setSignedIn(true);
        history.push("/alljobs")
    }

    return (
        <>
            <div className="register__upper">
                <Navbar signedIn={signedIn} showRight={!showRight} />

                <div className="register__jumbo">
                    <div className="register__jumboLeft">
                        <div className="register__welcome">

                        </div>
                    </div>
                </div>
            </div>

            <div className="register__lower">
                <div className="register__form">
                    <h3>Signup</h3>

                    <div className="register__types">
                        <p>I'm a*</p>

                        <div className="register__type">
                            <p className="register__recruiter">Recrutier</p>
                            <p className="register__candidate">Candidate</p>
                        </div>
                    </div>

                    <div className="register__fullName">
                        <p>Full Name*</p>
                        <input type="text" placeholder="Enter your full name" value={name} onChange={(e) => setName(e.target.value)} />
                        <p className="register__error" style={{ color: "red" }}>{errName}</p>
                    </div>

                    <div className="register__emailAddress">
                        <p>Email Address*</p>
                        <input type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        <p className="register__error" style={{ color: "red" }}>{errEmail}</p>
                    </div>

                    <div className="register__password">
                        <div className="register__createPass">
                            <p>Create Password*</p>
                            <input type="text" placeholder="Enter your Password" value={createPass} onChange={(e) => setCreatePass(e.target.value)} />
                        </div>

                        <div className="register__confirmPass">
                            <p>Confirm Password*</p>
                            <input type="text" placeholder="Enter your Password" value={confirmPass} onChange={(e) => setConfirmPass(e.target.value)} />
                        </div>

                    </div>
                    <p className="register__error" style={{ color: "red" }}>{errPassword}</p>

                    <div className="register__skills">
                        <p>Skills</p>
                        <input type="text" placeholder="Enter comma seperated skills" value={skills} onChange={(e) => setSkills(e.target.value)} />
                    </div>

                    <div className="register__submit" onClick={register}>
                        <p>Signup</p>
                    </div>

                    <div className="register__login">
                        <p>Have an account? <span style={{ color: "#43AFFF", textDecoration: "underline", cursor: "pointer" }} onClick={() => history.push("/login")}>Login</span></p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Register
