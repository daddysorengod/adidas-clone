import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
    Navigation
} from 'swiper';

import "swiper/css/navigation"


interface ProductCarouselProps {
    items: any,
    slidesPerGroup?: number,
    pagination?: boolean,
    setOnColorPreview: any,
}

export default function ProductCarousel(props: ProductCarouselProps) {

    const { items, setOnColorPreview } = props;


    const mapItemsToImg = () => {
        return items.map((item: any, i: number) => {
            return <img
                src={item.subImg}
                style={{ height: '50px', width: '50px' }}
                alt="product"
                onMouseOver={() => { setOnColorPreview(i) }}
                onMouseLeave={() => { setOnColorPreview(null) }}
            />
        })
    }


    return <div className='product-carousel' style={{ position: 'relative' }}>
        <Swiper
            slidesPerView={"auto"}
            className="mySwiper"
            slidesPerGroup={props.slidesPerGroup ? props.slidesPerGroup : 4}
            pagination={props.pagination ? {
                "clickable": true
            } : false}
            navigation={true}
            spaceBetween={0}
            allowTouchMove={false}
            breakpoints={{
                "1200": {
                    'slidesPerView': 4,
                    'slidesPerGroup': 4
                },
                "900": {
                    'slidesPerView': 3,
                    'slidesPerGroup': 3
                },
                "600": {
                    'slidesPerView': 2,
                    'slidesPerGroup': 2
                },
            }}
        >
            {/* {items && items.map((item: any) => {
                return <SwiperSlide key={item}>
                    {item}
                </SwiperSlide>
            })} */}
            {
                items && mapItemsToImg().map((img: any, index: number) => {
                    return <SwiperSlide key={index}>
                        {img}
                    </SwiperSlide>
                })
            }
        </Swiper>
    </div>;
}
