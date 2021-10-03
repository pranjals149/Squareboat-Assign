import React from 'react'
import { useHistory } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'

import "./ResetPass.css"

function ResetPass({ signedIn, setSignedIn, showRight }) {
    const history = useHistory()
    return (
        <>
            <div className="reset__upper">
                <Navbar signedIn={signedIn} showRight={showRight} />

                <div className="reset__jumbo">
                    <div className="reset__jumboLeft">
                        <div className="reset__welcome">

                        </div>
                    </div>
                </div>
            </div>

            <div className="reset__lower">
                <div className="reset__form">
                    <h3>Reset your Password</h3>

                    <p className="reset__para">Enter your new password below</p>

                    <div className="reset__emailAddress">
                        <p>New Password</p>
                        <input type="password" placeholder="Enter your password" />
                    </div>

                    <div className="reset__password">
                        <div className="reset__pass">
                            <p>Confirm Password</p>
                        </div>
                        <input type="password" placeholder="Enter your password" />
                    </div>

                    <div className="reset__submit" onClick={() => history.push("/login")}>
                        <p>Reset</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ResetPass
