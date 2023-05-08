import React from 'react'
import { useNavigate } from "react-router-dom"
import { useState, useContext } from "react";
import UserContext from '../../context/userContext/UserContext';
const Card = (props) => {
    const navigate = useNavigate();
    const user = useContext(UserContext);
    return (
        <div className="card">
            <div className="content">
                <div className="back">
                    <div className="back-content">
                        <h1>{props.heading}</h1>
                        <h3>{props.Certificates}</h3>
                    </div>
                </div>
                <div className="front">
                    <div className="front-content">
                        <div className="cardplan">
                            <h4 style={{ textAlign: "center" }} className="">
                                Standard plan
                            </h4>
                            <div style={{ paddingLeft: "1rem" }} className="price">
                                <span style={{
                                    fontSize: "1.875rem",
                                    lineHeight: "2.25rem",
                                    fontWeight: "600",
                                }}>$</span>
                                <span style={{
                                    fontSize: "3rem",
                                    lineHeight: "1",
                                    fontWeight: "800",
                                    letterSpacing: "-0.025em",
                                }}>{props.price}</span>
                                <span style={{
                                    marginLeft: "0.25rem",
                                    color: "#6B7280",
                                    fontSize: "1.25rem",
                                    lineHeight: "1.75rem",
                                    fontWeight: "400",
                                }}>/certficates</span>
                            </div>
                            <ul style={{
                                marginTop: "4rem",
                                marginBottom: "1.75rem",
                            }}>

                                <li style={{
                                    display: "flex",
                                    marginTop: "0.8rem"
                                }}>
                                    <svg aria-hidden="true" style={{
                                        color: "#2563EB",
                                        flexShrink: "0",
                                        width: "1.25rem",
                                        height: "1.25rem",
                                    }} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                                    <span style={{
                                        color: "#6B7280",
                                        fontSize: "1rem",
                                        lineHeight: "1.5rem",
                                        fontWeight: "400",
                                        lineHeight: "1.25",
                                    }}>{props.Certificates}</span>
                                </li>
                            </ul>
                            <div style={{ display: "flex", justifyContent: "center", marginTop: "5rem" }}>
                                <button
                                    className={`${props.button === false ? "hidden" : ""}`}
                                    onClick={() => {
                                        navigate("/transaction"); 
                                        console.log(props.heading)
                                        user.setplanname(props.heading);
                                        user.setplanprice(props.price);
                                        user.setdetails(props.Certificates);
                                    }}>Buy Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card;