import React from 'react'
import { useHistory } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'

import "./ForgotPass.css"

function ForgotPass({ signedIn, setSignedIn, showRight }) {
    const history = useHistory()
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
                        <input type="email" placeholder="Enter your email" />
                    </div>

                    <div className="forgot__submit" onClick={() => history.push("/reset")}>
                        <p>Submit</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ForgotPass
