import React, { Component } from 'react'
import { MyConsumer } from '../../../Context/Context';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/swiper.scss';
import 'swiper/swiper-bundle.css'
import '../Slider/Slider.css';
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);
export default class Slider extends Component {
    render() {
        return (
            <MyConsumer>
                {
                    value => {
                        const {slider} = value;
                        return <Swiper
                            spaceBetween={0}
                            slidesPerView={1}
                            navigation
                            pagination={{ clickable: true }}
                            onSwiper={(swiper) => console.log(swiper)}
                            onSlideChange={() => console.log('slide change')}>
                            {slider.map(element => <SwiperSlide key={element.id}> <img src={element.image} alt="Slider Image" /></SwiperSlide>)}
                        </Swiper>
                    }
                }
            </MyConsumer>
        )
    }
}
