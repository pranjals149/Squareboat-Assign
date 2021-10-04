import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import { auth } from "../../firebase"

import "./Login.css"

function Login({ signedIn, setSignedIn, showRight }) {
    const history = useHistory()

    const [email, setEmail] = useState("")
    const [pass, setPass] = useState("")

    const login = (e) => {

        e.preventDefault()

        auth
            .signInWithEmailAndPassword(email, pass)
            .then(() => {
                setSignedIn(true);
                localStorage.setItem("email", email);
                history.push('/alljobs')
            })
            .catch(err => alert(err.message))
    }

    return (
        <>
            <div className="login__upper">
                <Navbar signedIn={signedIn} showRight={!showRight} />

                <div className="login__jumbo">
                    <div className="login__jumboLeft">
                        <div className="login__welcome">

                        </div>
                    </div>
                </div>
            </div>

            <div className="login__lower">
                <div className="login__form">
                    <h3>Login</h3>

                    <div className="login__emailAddress">
                        <p>Email Address</p>
                        <input type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>

                    <div className="login__password">
                        <div className="login__pass">
                            <p>Password</p>
                            <p style={{ color: "#43AFFF", cursor: "pointer" }} onClick={() => history.push("/forgot")}>Forgot your password?</p>
                        </div>
                        <input type="password" placeholder="Enter your password" value={pass} onChange={(e) => setPass(e.target.value)} />
                    </div>

                    <div className="login__submit" onClick={login}>
                        <p>Login</p>
                    </div>

                    <div className="login__register">
                        <p>New to MyJobs? <span style={{ color: "#43AFFF", textDecoration: "underline", cursor: "pointer" }} onClick={() => history.push("/register")}>Create an account</span></p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login
