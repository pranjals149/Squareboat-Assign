import React from 'react'
import { useHistory } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'

import "./PostJob.css"

function PostJob() {
    const history = useHistory()

    return (
        <>
            <div className="login__upper">
                <Navbar />

                <div className="postJob__jumbo">
                    <div className="postJob__jumboLeft">
                        <div className="postJob__welcome">

                        </div>
                    </div>
                </div>
            </div>

            <div className="postJob__lower">
                <div className="postJob__form">
                    <h3>Post a Job</h3>

                    <div className="postJob__jobTitle">
                        <p>Job Title*</p>
                        <input type="text" placeholder="Enter Job Title" />
                    </div>

                    <div className="postJob__description">
                        <p>Description*</p>
                        {/* <input type="text" placeholder="Enter your password" /> */}
                        <textarea name="description" cols="56" rows="10" placeholder="Enter job description"></textarea>
                    </div>

                    <div className="postJob__location">
                        <p>Location*</p>
                        <input type="text" placeholder="Enter location" />
                    </div>

                    <div className="postJob__submit" onClick={() => history.push("/alljobs")}>
                        <p>Post</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PostJob
