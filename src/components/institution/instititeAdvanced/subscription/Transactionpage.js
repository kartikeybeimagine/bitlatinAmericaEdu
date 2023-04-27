import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useState, useContext } from "react";
import UserContext from '../../../../context/userContext/UserContext';
const Transactionpage = (props) => {
    const navigation = useNavigate();
    const user = useContext(UserContext);
    return (
        <div style={{
            maxWidth: "80vw",
            marginLeft: "auto",
            marginRight: "auto"
        }} className="min-h-[100vh] mx-auto max-w-[80vw]" >
            <div className="md:mt-4 mt-10 flex justify-center">
                <div className="w-full mx-auto max-w-[600px] p-4  border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
                    <form className="space-y-6" action="#">
                        <h5 className="text-3xl font-bold text-center  text-gray-900 dark:text-white">
                            Selected Plan <span className="text-purple-500">{user.planname}</span>
                        </h5>
                        <div className='flex justify-between text-white'>
                            <div className="space-y-3 my-auto font-bold">
                                {user.details}
                            </div>
                            <div className="space-y-3">
                                <div className="font-semibold">
                                    Price per certificates
                                </div>
                                <div className="font-bold">
                                    $ {user.planprice}
                                </div>
                            </div>
                        </div>
                        <div className='text-white'>
                            <div className="text-xl font-bold">
                                Price details
                            </div>
                            <div className="flex justify-between">
                                <div className="text-lg font-semibold mt-3">
                                    Base Price :
                                </div>
                                <div className="text-lg my-auto flex">
                                    $ {user.planprice}
                                </div>
                            </div>
                            <div className="flex justify-between">
                                <div className="text-lg font-semibold mt-3">
                                    Transaction fee :
                                </div>
                                <div className="text-lg my-auto">
                                    1000
                                </div>
                            </div>
                            <hr />
                            <div className="flex justify-between">
                                <div className="text-lg font-semibold mt-3">
                                    Total amount :
                                </div>
                                <div className="text-lg">
                                    1000
                                </div>
                            </div>
                        </div>
                        <div
                            className="md:flex flex-col md:flex-row md:space-x-4">
                            <button
                                style={{
                                    paddingTop: "0.625rem",
                                    paddingBottom: "0.625rem",
                                    paddingLeft: "1.25rem",
                                    paddingRight: "1.25rem",
                                    backgroundColor: "#10B981",
                                    color: "#ffffff",
                                    fontSize: "0.875rem",
                                    lineHeight: "1.25rem",
                                    fontWeight: "500",
                                    textAlign: "center",
                                    width: "100%",
                                    borderRadius: "0.5rem",
                                }}
                                type="submit"
                                className="w-full  text-white bg-green-500 hover:bg-green-400 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                            >
                                Procced To Pay
                            </button>
                            <button
                                style={{
                                    paddingTop: "0.625rem",
                                    paddingBottom: "0.625rem",
                                    paddingLeft: "1.25rem",
                                    paddingRight: "1.25rem",
                                    backgroundColor: "#B91C1C",
                                    color: "#ffffff",
                                    fontSize: "0.875rem",
                                    lineHeight: "1.25rem",
                                    fontWeight: "500",
                                    textAlign: "center",
                                    width: "100%",
                                    borderRadius: "0.5rem",
                                }}
                                type="submit"
                                onClick={() => {
                                    navigation("/institution")
                                }}
                                className="w-full  text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
                            >
                                Cancel
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div >
    )
}

export default Transactionpage