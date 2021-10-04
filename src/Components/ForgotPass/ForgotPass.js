import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import firebase from "firebase"

import "./ForgotPass.css"

function ForgotPass({ signedIn, setSignedIn, showRight }) {
    const history = useHistory()

    const [email, setEmail] = useState("")
    const [err, setErr] = useState("")

    const reset = (e) => {
        e.preventDefault()

        if (!email.length) {
            setErr("All fields are mandatory.");
            return;
        }

        firebase.auth().sendPasswordResetEmail(email)
            .then(function () {
                alert('Link for resetting your password has been sent to your provided email. Please check ...')
            }).catch(function (e) {
                alert(e);
            })

        history.push("/reset")
    }

    return (
        <>
            <div className="forgot__upper">
                <Navbar signedIn={signedIn} showRight={showRight} />

                <div className="forgot__jumbo">
                    <div className="forgot__jumboLeft">
                        <div className="forgot__welcome">

                        </div>
                    </div>
                </div>
            </div>

            <div className="forgot__lower">
                <div className="forgot__form">
                    <h3>Forgot your password?</h3>

                    <p className="forgot__para">Enter the email associated with your account and we’ll send you instructions to reset your password.</p>

                    <div className="forgot__emailAddress">
                        <p>Email Address</p>
                        <input type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>

                    <div className="forgot__error">{err}</div>

                    <div className="forgot__submit">
                        <p onClick={reset}>Submit</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ForgotPass
