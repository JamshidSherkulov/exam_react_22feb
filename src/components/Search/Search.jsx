import React from "react";
import './Search.css';
import {BsSearch } from 'react-icons/bs';
import {AiFillBell, AiOutlineUser } from 'react-icons/ai';
 
const Search = () => {
    return(
        <div className="">
            <div id="input__bg" className="input-group mb-3 w-50 mx-auto mt-5">
                <input type="text" className="form-control" placeholder="Search..." />
                <span className="input-group-text bg-light text-primary border border-end"><BsSearch /></span>
                <span className="input-group-text icons__color fs-5 text-primary"><AiFillBell /></span>
                <span className="input-group-text icons__color fs-5 text-primary"><AiOutlineUser /></span>
            </div>
            
        </div>
    )
}

export default Search;