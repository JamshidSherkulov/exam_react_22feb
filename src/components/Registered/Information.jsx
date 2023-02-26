import React from "react";
import './Registered.css'
import {FiUsers} from 'react-icons/fi'
import {AiOutlineRise} from 'react-icons/ai'

const Information = (props) => {

    return(
        <div>
            <div className="d-flex justify-content-between align-items-center">
                <p>{ props.title }</p>
                <p>{ props.icons }</p>
            </div>
            <h3 className="text-center fw-bold">{ props.number }</h3>
            <div className="d-flex justify-content-between align-items-center">
                <p className="text-success">{ props.resultIcon } {props.result}</p>
                <p><a href="#">Batafsil</a></p>
            </div>
        </div>
    )
}

export default Information;