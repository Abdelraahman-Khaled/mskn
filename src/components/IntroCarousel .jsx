import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { slider1, slider2, slider3 } from '../assets/assets';

const IntroCarousel = () => {
    const settings = {
        className: "",
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        pauseOnHover: false,
    };

    return (
        <Slider {...settings}>
            <div className='relative ' dir="rtl">
                <div className="overlay overlay-a"></div>
                <img className='h-[16rem] md:h-[30rem] xl:h-[50rem] w-full' src={slider1} alt="" />
                <div className='absolute top-1/2 left-1/2 z-50 text-white -translate-x-1/2 -translate-y-1/2 '>
                    <h1 className='leading-normal md:text-2xl lg:text-4xl font-bold lg:w-11/12 xl:w-3/5  '> نحن في  <span className='text-custom-green'>مسكن </span>نؤمن أن الاستثمار العقاري هو أكثر من مجرد شراء وبيع إنه بناء للثقة والمستقبل</h1>
                </div>
            </div>
            <div className='relative ' dir="rtl">
                <div className="overlay overlay-a"></div>
                <img className='h-[16rem] md:h-[30rem] xl:h-[50rem] w-full' src={slider2} alt="" />
                <div className='absolute top-1/2 left-1/2 z-50 text-white -translate-x-1/2 -translate-y-1/2 '>
                    <h1 className='leading-normal md:text-2xl lg:text-4xl font-bold lg:w-11/12 xl:w-3/5  '> نحن في  <span className='text-custom-green'>مسكن </span>نقدم لك خدمة عقارية لا مثيل لها. من استشارات مهنية إلى عمليات شراء وبيع سلسة</h1>
                </div>
            </div>
            <div className='relative ' dir="rtl">
                <div className="overlay overlay-a"></div>
                <img className='h-[16rem] md:h-[30rem] xl:h-[50rem] w-full' src={slider3} alt="" />
                <div className='absolute top-1/2 left-1/2 z-50 text-white -translate-x-1/2 -translate-y-1/2 '>
                    <h1 className='leading-normal md:text-2xl lg:text-4xl font-bold lg:w-11/12 xl:w-3/5  '>  رؤيتنا في  <span className='text-custom-green'>مسكن </span>هي أن نكون شريكك الموثوق في مجال العقارات. نلتزم بتقديم أفضل المشاريع العقارية</h1>
                </div>
            </div>



        </Slider>
    );
}

export default IntroCarousel;
