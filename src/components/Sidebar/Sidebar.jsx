import React from "react";
import './Sidebar.css';
import { Link } from 'react-router-dom';
import { AiOutlineHome, AiOutlineSetting } from 'react-icons/ai'
import { BiUserX, BiBookContent } from 'react-icons/bi'
import { BsHeadset } from 'react-icons/bs'


const Sidebar = () => {
    return(
        <div id="sidebar__container" className="">
            <div>
                <AiOutlineHome className="fs-4 text-light icons" />
                <Link to={ '/' } className="fs-6 text-light text-decoration-none ps-2">Statistika</Link>
            </div>
            <div>
                <AiOutlineSetting className="fs-4 text-light" />
                <Link to={ '/settings' } className="fs-6 text-light text-decoration-none ps-2">Amallar</Link>
            </div>
            <div>
                <BiUserX className="fs-4 text-light" />
                <Link to={ '/permission' } className="fs-6 text-light text-decoration-none ps-2">Ruxsatlar</Link>
            </div>
            <div>
                <BiBookContent className="fs-4 text-light" />
                <Link to={ '/repot' } className="fs-6 text-light text-decoration-none ps-2">Hisobotlar</Link>
            </div>
            <div>
                <BsHeadset className="fs-4 text-light" />
                <Link to={ '/contact' } className="fs-6 text-light text-decoration-none ps-2">Call-markaz</Link>
            </div>
        </div>
    )
}

export default Sidebar;