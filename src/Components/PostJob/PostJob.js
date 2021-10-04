import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { db } from '../../firebase'
import Navbar from '../Navbar/Navbar'
import firebase from 'firebase';

import "./PostJob.css"

function PostJob() {
    const history = useHistory()

    const localEmail = localStorage.getItem("email")

    const [title, setTitle] = useState([])
    const [desc, setDesc] = useState([])
    const [location, setLocation] = useState([])

    const [err, setErr] = useState("")

    const postJob = () => {
        if (!title.length || !desc.length || !location.length) {
            setErr("All fields are mandatory.")
            return;
        }

        db.collection("AllJobs").doc(localEmail).collection("Job_Posted").add({
            title: title,
            description: desc,
            location: location,
            time: firebase.firestore.FieldValue.serverTimestamp(),
        })

        history.push("/alljobs")
    }

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
                        <input type="text" placeholder="Enter Job Title" value={title} onChange={(e) => setTitle(e.target.value)} />
                    </div>

                    <div className="postJob__description">
                        <p>Description*</p>
                        {/* <input type="text" placeholder="Enter your password" /> */}
                        <textarea name="description" cols="56" rows="10" placeholder="Enter job description" value={desc} onChange={(e) => setDesc(e.target.value)}></textarea>
                    </div>

                    <div className="postJob__location">
                        <p>Location*</p>
                        <input type="text" placeholder="Enter location" value={location} onChange={(e) => setLocation(e.target.value)} />
                    </div>

                    <div className="postJob__error">
                        {err}
                    </div>

                    <div className="postJob__submit" onClick={postJob}>
                        <p>Post</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PostJob
