import React from "react";
import './Registered.css'
import { FiUsers } from 'react-icons/fi'
import { AiOutlineExclamationCircle } from 'react-icons/ai'
import Information from "./Information";

const Registered = () => {

    return(
        <div className="mt-5 container mx-auto">
            <h3>Ro’yxatdan o’tanlar</h3>
            <div id="all__users" className="border p-3 text-center">
                <span><FiUsers className="display-2 text-primary" /></span>
                <span className="text-primary display-1 fw-bold">1 712 001  </span>
                <span><AiOutlineExclamationCircle className="display-2 text-primary" /></span>
            </div>
            <div className="row justify-content-between align-items-center">
                <div className="col-3 border m-3 p-4">
                    <Information />
                </div>
                <div className="col-3 border m-3 p-4">
                    <Information />
                </div>
                <div className="col-3 border m-3 p-4">
                    <Information />
                </div>
                <div className="col-3 border m-3 p-4">
                    <Information />
                </div>
                <div className="col-3 border m-3">
                    <Information />
                </div>
                <div className="col-3 border m-3 p-4">
                    <Information />
                </div>
               
            </div>
        </div>
    )
}

export default Registered;