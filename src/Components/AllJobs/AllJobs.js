// import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { db } from '../../firebase'
import Navbar from '../Navbar/Navbar'

import "./AllJobs.css"

import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Avatar } from '@material-ui/core'
import Pagination from 'react-bootstrap/Pagination'
import axios from "axios"

// import "bootstrap/dist/css/bootstrap.min.css";

function AllJobs() {

    const [jobs, setJobs] = useState([])
    const localEmail = localStorage.getItem("email")

    const history = useHistory()

    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    useEffect(() => {
        // axios.get("job.json")
        //     .then((res) => {
        //         setJobs(res.data);
        //     })
        db
            .collection("AllJobs")
            .doc(localEmail)
            .collection("Job_Posted")
            .orderBy("time", "asc")
            .onSnapshot((snapshot) => {
                setJobs(snapshot.docs.map((doc) => ({ id: doc.id, job: doc.data() })))
            })
    }, [])

    const [pageArray, setPageArray] = React.useState([]);

    const [currentPage, setCurrentPage] = useState()
    const [currPage, setCurrPage] = useState()
    const [applicants, setApplicants] = useState([])

    useEffect(() => {
        var totPages = parseInt(5);
        var currentPage = parseInt(1);
        var pageArr = [];
        if (totPages > 1) {
            if (totPages <= 9) {
                var i = 1;
                while (i <= totPages) {
                    pageArr.push(i);
                    i++;
                }
            } else {
                if (currentPage <= 5) pageArr = [1, 2, 3, 4, 5, 6, 7, 8, "", totPages];
                else if (totPages - currentPage <= 4)
                    pageArr = [
                        1,
                        "",
                        totPages - 7,
                        totPages - 6,
                        totPages - 5,
                        totPages - 4,
                        totPages - 3,
                        totPages - 2,
                        totPages - 1,
                        totPages
                    ];
                else
                    pageArr = [
                        1,
                        "",
                        currentPage - 3,
                        currentPage - 2,
                        currentPage - 1,
                        currentPage,
                        currentPage + 1,
                        currentPage + 2,
                        currentPage + 3,
                        "",
                        totPages
                    ];
            }
        }
        setPageArray(pageArr);
    }, []);

    const pageClicked = (page_number) => {
        setCurrPage(page_number);
    };


    useEffect(() => {
        axios.get("applicants.json")
            .then((res) => {
                setApplicants(res.data);
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
            {jobs.length ? jobs.map((val) => (
                <div className="allJobs__lower" key={val.id}>
                    <div className="allJobs__row">

                        <div className="allJobs__columns">
                            <div className="allJobs__card">
                                <h3>{val.job.title}</h3>
                                <p>{val.job.description}</p>

                                <div className="allJobs__location">
                                    <div className="allJobs__icons">
                                        <img src="/images/pin.png" alt="" />
                                        <p>{val.job.location}</p>
                                    </div>

                                    <div className="allJobs__buttonContent">
                                        <p className="allJobs__content" onClick={handleOpen}>View applications</p>
                                    </div>
                                </div>

                                <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                                    <DialogTitle id="form-dialog-title" style={{ color: "#303F60" }}>Applicants for this job</DialogTitle>

                                    <div style={{
                                        width: "50%",
                                        textAlign: "center",
                                        marginBottom: "15px"
                                    }}>
                                        <p style={{ color: "#303F60" }}>Total 6 applications</p>
                                    </div>

                                    <div style={{ background: "#EEEFF2" }}>
                                        {applicants.map((val) => (
                                            <div class="card">
                                                <div style={{ display: "flex" }}>
                                                    <Avatar style={{ width: "50px", height: "50px" }} />
                                                    <div class="container">
                                                        <h4><b>{val.name}</b></h4>
                                                        <p>{val.email}</p>
                                                    </div>
                                                </div>

                                                <div className="allJobs__skillsContainer">
                                                    <p className="allJobs__skills">Skills</p>
                                                    <p className="allJobs__skill">{val.skills}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    <Pagination style={{ justifyContent: "center" }}>
                                        {pageArray.map((ele, ind) => {
                                            const toReturn = [];

                                            if (ind === 0) {
                                                toReturn.push(
                                                    <Pagination.First
                                                        key={"firstpage"}
                                                        onClick={
                                                            currentPage === 1
                                                                ? () => { }
                                                                : () => {
                                                                    pageClicked(1);
                                                                }
                                                        }
                                                    />
                                                );

                                                toReturn.push(
                                                    <Pagination.Prev
                                                        key={"prevpage"}
                                                        onClick={
                                                            currentPage === 1
                                                                ? () => { }
                                                                : () => {
                                                                    pageClicked(currentPage - 1);
                                                                }
                                                        }
                                                    />
                                                );
                                            }

                                            if (ele === "") toReturn.push(<Pagination.Ellipsis key={ind} />);
                                            else
                                                toReturn.push(
                                                    <Pagination.Item
                                                        key={ind}
                                                        active={currentPage === ele ? true : false}
                                                        onClick={
                                                            currentPage === ele
                                                                ? () => { }
                                                                : () => {
                                                                    pageClicked(ele);
                                                                }
                                                        }
                                                    >
                                                        {ele}
                                                    </Pagination.Item>
                                                );

                                            if (ind === pageArray.length - 1) {
                                                toReturn.push(
                                                    <Pagination.Next
                                                        key={"nextpage"}
                                                        onClick={
                                                            currentPage === ele
                                                                ? () => { }
                                                                : () => {
                                                                    pageClicked(currentPage + 1);
                                                                }
                                                        }
                                                    />
                                                );

                                                toReturn.push(
                                                    <Pagination.Last
                                                        key={"lastpage"}
                                                        onClick={
                                                            currentPage === ele
                                                                ? () => { }
                                                                : () => {
                                                                    pageClicked(ele);
                                                                }
                                                        }
                                                    />
                                                );
                                            }

                                            return toReturn;
                                        })}
                                    </Pagination>
                                </Dialog>

                            </div>
                        </div>
                    </div>
                </div>
            )) : (
                <div className="allJobs__empty">
                    <img src="/images/writing.png" alt="" />
                    <p>Your posted jobs will show here!</p>

                    <div className="allJobs__post" onClick={() => history.push("/postJob")}>
                        <p>Post a Job</p>
                    </div>
                </div>
            )}
        </>
    )
}

export default AllJobs
