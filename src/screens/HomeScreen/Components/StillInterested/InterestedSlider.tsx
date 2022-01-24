import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from 'swiper';
import ProductCard from '@app/components/ProductCard/ProductCard';
SwiperCore.use([Navigation])

export default function InterestedSlider(props: any) {
    const { items } = props;
    return <Swiper
        slidesPerView={"auto"}
        className="mySwiper"
        slidesPerGroup={4}
        navigation={true}
        loop={true}
        spaceBetween={30}
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
        {items.map((item: any) => {
            return <SwiperSlide key={item}>
                    <ProductCard item={item} inList={true} />
            </SwiperSlide>
        })}

    </Swiper>;
}
