import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Pagination, Navigation
} from 'swiper';

import "swiper/css/pagination"
import "swiper/css/navigation"
SwiperCore.use([Pagination, Navigation]);

interface InnerCarouselProps {
  items: any,
  className?: string,
  slidesPerGroup?: number,
  pagination?: boolean,
}


export default function InnerCarousel(props: InnerCarouselProps) {
  const { items, className, slidesPerGroup } = props;

  return <div className={`${className} inner-carousel`} style={{ position: 'relative' }}>
    <Swiper
      slidesPerView={"auto"}
      className="mySwiper"
      slidesPerGroup={props.slidesPerGroup}
      pagination={props.pagination ? {
        "clickable": true
      } : false}
      navigation={true}
      spaceBetween={10}
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
      {items && items.map((item: any, index: number) => {
        return <SwiperSlide key={index}>
          {item}
        </SwiperSlide>
      })}
    </Swiper>
  </div>;
}
