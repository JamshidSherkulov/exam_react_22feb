import React from "react";
import './Registered.css'
import {FiUsers} from 'react-icons/fi'
import {AiOutlineRise} from 'react-icons/ai'

const Information = () => {

    return(
        <div>
            <div className="d-flex justify-content-between align-items-center">
                <p>Faol foydalanuvchilar</p>
                <p><FiUsers className="text-primary fs-4" /></p>
            </div>
            <h3 className="text-center fw-bold">1.5 mln</h3>
            <div className="d-flex justify-content-between align-items-center">
                <p className="text-success"><AiOutlineRise /> +15%</p>
                <p><a href="#">Batafsil</a></p>
            </div>
        </div>
    )
}

export default Information;