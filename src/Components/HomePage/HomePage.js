import React from 'react'
import { useHistory } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';

import "./HomePage.css"

function HomePage({ signedIn, setSignedIn, showRight }) {

    const history = useHistory();

    return (
        <>
            <div className="homePage__Upper">
                {/* Navbar */}
                <Navbar signedIn={signedIn} showRight={showRight} />

                {/* Jumbotron */}
                <div className="homePage__jumbo">
                    <div className="homePage__jumboLeft">
                        <div className="homePage__welcome">
                            <p className="homePage__welcomePara" style={{ color: "#FFFFFF", fontWeight: 300 }}>Welcome to <br /><span style={{ fontWeight: 700 }}>My<span style={{ color: "#43AFFF" }}>Jobs</span></span></p>

                            <p className="homePage__getStarted" onClick={() => history.push("/register")}>Get Started</p>
                        </div>
                    </div>

                    <div className="homePage__image">
                        <img src="https://images.unsplash.com/photo-1593642634402-b0eb5e2eebc9?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=869&q=80" alt="" />
                    </div>
                </div>
            </div>

            <div className="homePage__lower">
                <div className="homePage__why">
                    <p>Why Us</p>
                </div>


                <div className="homePage__row">
                    <div className="homePage__columns">
                        <div className="homePage__card">
                            <h3>Get More <br />Visibility</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                        </div>
                    </div>

                    <div className="homePage__columns">
                        <div className="homePage__card">
                            <h3>Organize your <br />Candidates</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                        </div>
                    </div>

                    <div className="homePage__columns">
                        <div className="homePage__card">
                            <h3>Verify their <br />Abilities</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                        </div>
                    </div>
                </div>

                <div className="homePage__why">
                    <p>Companies who trust us</p>
                </div>
            </div>
        </>
    )
}

export default HomePage
