import React from "react";
import Search from "../../components/Search/Search";
import Calendar from '../../components/Calendar/Calendar'
import './Statistics.css'
import Registered from "../../components/Registered/Registered";

const Statistics = () => {
    return(
        <div>
           <Search />
           <Calendar />
           <Registered />
        </div>
    )
}

export default Statistics;