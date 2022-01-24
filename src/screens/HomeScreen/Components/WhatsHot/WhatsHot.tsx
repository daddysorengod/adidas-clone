import InnerCarousel from '@app/components/Carousel/InnerCarousel';
import { Container } from '@material-ui/core';
import React from 'react';
import useStyles from './WhatsHot.styles';
import WhatsHotCard from './WhatsHotCard';
export default function WhatsHot(props: any) {
    const classes = useStyles();
    const source = 'https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/viVN/Images/running-ss22-supernova-launch-glp-m-teaser-carousel-d_tcm337-825366.jpg';

    const items = [
        <WhatsHotCard img={source} title={'Chạy bộ với giày supernova'} description='Năng lượng kết hợp sự thoải mái. Đã mở bán.'/>,
        <WhatsHotCard img={source} title={'Chạy bộ với giày supernova'} description='Năng lượng kết hợp sự thoải mái. Đã mở bán.'/>,
        <WhatsHotCard img={source} title={'Chạy bộ với giày supernova'} description='Năng lượng kết hợp sự thoải mái. Đã mở bán.'/>,
        <WhatsHotCard img={source} title={'Chạy bộ với giày supernova'} description='Năng lượng kết hợp sự thoải mái. Đã mở bán.'/>,
        <WhatsHotCard img={source} title={'Chạy bộ với giày supernova'} description='Năng lượng kết hợp sự thoải mái. Đã mở bán.'/>,
    ]

    return <Container>
        <h4 className={classes.h4}>what's hot</h4>
        <InnerCarousel items={items}/>
    </Container>;
}
