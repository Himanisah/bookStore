import React from 'react'
/* from react slick css */
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
/* from react slick responsive */
import Slider from "react-slick";

import list from "../../public/list.json";
import Cards from './Cards';


function Freebook() {
    /* filter method  */
    const filterData = list.filter((data) => data.category === "free");
    /* console.log(filterData); */


    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <>
            <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
                <div>
                    <h1 className='font-semibold text-x1 pb-2'>Free Offered Course</h1>
                    <p>"Free Coursebook: Your Guide to Mastering the Material - Learn, Grow, and Succeed at No Cost!"</p>
                </div>
                <div>
                    <Slider {...settings}>
                        {filterData.map((item) => (
                            <Cards item={item} key={item.id} />
                        ))}


                    </Slider>

                </div>
            </div>
        </>
    );
}

export default Freebook;
