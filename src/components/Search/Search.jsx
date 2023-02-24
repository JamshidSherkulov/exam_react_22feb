import React from "react";
import './Search.css';
import {BsSearch } from 'react-icons/bs';
 
const Search = () => {
    return(
        <div className="">
            <div id="input__bg" className="input-group mb-3 w-50 mx-auto mt-5">
                <input type="text" className="form-control" placeholder="Search..." />
                <span className="input-group-text bg-light text-primary"><BsSearch /></span>
            </div>
        </div>
    )
}

export default Search;