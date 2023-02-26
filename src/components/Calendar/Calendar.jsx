import React from "react";
import './Calendar.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import calendarData from '../../data/calendar.js' 

const Calendar = () => {

    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 10,
        slidesToScroll: 2,
        arrows: true,
        autoplaySpeed: 1000,
      };

    return(
        <Slider className="mt-5 container" {...settings}>
                {
                    calendarData.map((item, index) => {
                        return(
                            <div className="mx-auto" key={item.id}>
                                <div className="item__container border bg-light">
                                    <p>{ item.month }</p>
                                    <p>{ item.date }</p>
                                </div>
                            </div>
                        )
                    })
                }
        </Slider>
    )
}

export default Calendar;