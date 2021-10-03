import { Avatar } from '@material-ui/core';
import React from 'react'
import { useHistory } from 'react-router-dom';

import "../HomePage/HomePage.css"

function Navbar({ signedIn, showRight }) {
    const history = useHistory();
    return (
        <div>
            {signedIn === false ? (
                <div className="homePage__navbar">
                    <div className="homePage__icon">
                        <h2 style={{ color: "#FFFFFF", cursor: "pointer" }} onClick={() => history.push("/")}>My<span style={{ color: "#43AFFF" }}>Jobs</span></h2>
                    </div>

                    {showRight && (
                        <div className="homePage__button" onClick={() => history.push("/login")}>
                            <h4 style={{ fontWeight: 400 }}>Login/Signup</h4>
                        </div>
                    )}

                </div>
            ) : (
                <div className="homePage__navbar">
                    <div className="homePage__icon">
                        <h2 style={{ color: "#FFFFFF", cursor: "pointer" }} onClick={() => history.push("/")}>My<span style={{ color: "#43AFFF" }}>Jobs</span></h2>
                    </div>

                    <div className="homePage__rightSide">
                        <div className="homePage__post">
                            <p onClick={() => history.push("/postJob")}>Post a Job</p>
                            <Avatar src="/images/p.png" style={{ background: "#D9EFFF", color: "#303F60", cursor: "pointer" }} />
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Navbar
