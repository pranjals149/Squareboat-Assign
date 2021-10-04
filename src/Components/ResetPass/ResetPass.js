import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'

import "./ResetPass.css"

function ResetPass({ signedIn, setSignedIn, showRight }) {
    const history = useHistory()

    const [newPass, setNewPass] = useState("")
    const [confirmPass, setConfirmPass] = useState("")
    const [err, setErr] = useState("")

    const reset = (e) => {
        e.preventDefault()

        if (!newPass.length || !confirmPass.length) {
            setErr("All fields are mandatory.");
            return;
        }

        if (!(newPass === confirmPass)) {
            setErr("New password and confirm password must match.")
            return;
        }

        history.push("/login")
    }

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
                        <input type="password" placeholder="Enter your password" value={newPass} onChange={(e) => setNewPass(e.target.value)} />
                    </div>

                    <div className="reset__password">
                        <div className="reset__pass">
                            <p>Confirm Password</p>
                        </div>
                        <input type="password" placeholder="Enter your password" value={confirmPass} onChange={(e) => setConfirmPass(e.target.value)} />
                    </div>

                    <div className="reset__error">
                        {err}
                    </div>

                    <div className="reset__submit">
                        <p onClick={reset}>Reset</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ResetPass
