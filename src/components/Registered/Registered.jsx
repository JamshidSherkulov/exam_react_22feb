import React from "react";
import './Registered.css'
import { FiUsers, FiUserX } from 'react-icons/fi'
import { AiOutlineExclamationCircle, AiFillQuestionCircle, AiOutlineCloudDownload } from 'react-icons/ai'
import {FaUserCheck} from 'react-icons/fa'
import {GrUserPolice} from 'react-icons/gr'
import {AiOutlineRise} from 'react-icons/ai'
import {BiTrendingDown} from 'react-icons/bi'
import Information from "./Information";

const Registered = () => {

    return(
        <div className="mt-5 container mx-auto">
            <h3>Ro’yxatdan o’tanlar</h3>
            <div id="all__users" className="border p-3 text-center">
                <div><FiUsers className="display-2" /></div>
                <div className="text-primary display-1 fw-bold">1 712 001  </div>
                <div><AiOutlineExclamationCircle className="display-2 text-primary"/></div>
            </div>
            <div className="row justify-content-between align-items-center">
                <div className="col-3 border m-3 p-3">
                    <Information title='Faol foydalanuvchilar' icons={ <FiUsers className="text-primary fs-4" /> } number='1.5 mln' result='+15%' resultIcon={<AiOutlineRise className="text-success" />} />
                </div>
                <div className="col-3 border m-3 p-3">
                    <Information title='Shaxsini tasdiqlagan' icons={<FaUserCheck className="fs-4 text-success" />} number='625.1k' result='+15%' resultIcon={<AiOutlineRise className="text-success" />} />
                </div>
                <div className="col-3 border m-3 p-3">
                    <Information title='Shubhali foydalanuvchi' icons={<AiFillQuestionCircle className="fs-4 text-danger" />} number='5.1k' result='-3.5%' resultIcon={<BiTrendingDown className="text-danger" />} />
                </div>
                <div className="col-3 border m-3 p-3">
                    <Information title='Faol bo’lmagan' icons={<FiUserX className="fs-4 text-danger" />} number='25.1k' result='+15%' resultIcon={<AiOutlineRise className="text-success" />} />
                </div>
                <div className="col-3 border m-3 p-3">
                    <Information title='Soliq xodimlari' icons={<GrUserPolice className="fs-4 text-primary" />} number='2.1k' result='+5%' resultIcon={<AiOutlineRise className="text-success" />} />
                </div>
                <div className="col-3 border m-3 p-3">
                    <Information title='Yuklab olingan' icons={<AiOutlineCloudDownload className="fs-4 text-warning" />} number='1.7 mln' result='+5%' resultIcon={<AiOutlineRise className="text-success" />} />
                </div>
               
            </div>
        </div>
    )
}

export default Registered;