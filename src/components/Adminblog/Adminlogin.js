import React from 'react'
import "./Adminlogin.css"
const Adminlogin = () => {
    return (


        <>
            <div className="verifypageadmin">
                <div style={{ color: "white", textAlign: "center", fontSize: "30px", fontWeight: "600" }} className="">
                    Admin Login
                </div>
                <form style={{ marginLeft: "auto", marginRight: "auto", width: "40%", marginTop: "5%" }}>
                    <div style={{ marginBottom: "1.5rem" }}>
                        <label
                            htmlFor="email"
                            style={{
                                display: "block",
                                marginBottom: "0.5rem",
                                color: "white",
                                fontSize: "0.875rem",
                                lineHeight: "1.25rem",
                                fontWeight: "500",
                            }}
                        >
                            Your email
                        </label>
                        <input
                            type="email"
                            id="email"
                            style={{
                                display: "block",
                                padding: "0.625rem",
                                backgroundColor: "#F9FAFB",
                                color: "white",
                                fontSize: "0.875rem",
                                lineHeight: "1.25rem",
                                width: "100%",
                                borderRadius: "0.5rem",
                                borderWidth: "1px",
                                borderColor: "#D1D5DB",
                            }}
                            placeholder="name@flowbite.com"
                            required=""
                        />
                    </div>
                    <div style={{ marginBottom: "1.5rem" }}>
                        <label
                            htmlFor="password"
                            style={{
                                display: "block",
                                marginBottom: "0.5rem",
                                color: "white",
                                fontSize: "0.875rem",
                                lineHeight: "1.25rem",
                                fontWeight: "500"
                            }}
                        >
                            Your password
                        </label>
                        <input
                            type="password"
                            id="password"
                            style={{
                                display: "block",
                                padding: "0.625rem",
                                backgroundColor: "#F9FAFB",
                                color: "#111827",
                                fontSize: "0.875rem",
                                lineHeight: "1.25rem",
                                width: "100%",
                                borderRadius: "0.5rem",
                                borderWidth: "1px",
                                borderColor: "#D1D5DB",
                            }}
                            required=""
                        />
                    </div>
                    <button
                        type="submit"
                    >
                        Login
                    </button>
                </form>
            </div>

        </>

    )
}

export default Adminlogin