import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar/Navbar'

import "./AllJobs.css"

function AllJobs() {

    const [jobs, setJobs] = useState([])

    useEffect(() => {
        axios.get("job.json")
            .then((res) => {
                setJobs(res.data);
            })
    }, [])

    return (
        <>
            <div className="allJobs__Upper">
                {/* Navbar */}
                <Navbar />

                {/* Jumbotron */}
                <div className="allJobs__jumbo">
                    <div className="allJobs__jumboLeft">

                        <div className="allJobs__welcome">
                            <p className="allJobs__welcomePara" style={{ color: "#FFFFFF", fontWeight: 500 }}>Jobs posted by you</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="allJobs__lower">
                <div className="allJobs__row">
                    {jobs.map((val) => (
                        <div className="allJobs__columns">
                            <div className="allJobs__card">
                                <h3>{val.title}</h3>
                                <p>{val.description}</p>

                                <div className="allJobs__location">
                                    <div className="allJobs__icons">
                                        <img src="/images/pin.png" alt="" />
                                        <p>{val.location}</p>
                                    </div>

                                    <div className="allJobs__buttonContent">
                                        <p className="allJobs__content">{val.button_content}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </>
    )
}

export default AllJobs
