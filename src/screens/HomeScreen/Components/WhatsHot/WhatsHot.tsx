import InnerCarousel from '@app/components/Carousel/InnerCarousel';
import { Container } from '@material-ui/core';
import React from 'react';
import useStyles from './WhatsHot.styles';
import WhatsHotCard from './WhatsHotCard';
export default function WhatsHot(props: any) {
    const classes = useStyles();

    const rawSource = [
        {
            img: 'https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/viVN/Images/running-ss22-supernova-launch-glp-m-teaser-carousel-d_tcm337-825366.jpg',
            title: 'Chạy bộ với giày supernova',
            description: ['Năng lượng kết hợp sự thoải mái. Đã mở bán.']
        },
        {
            video: 'https://brand.assets.adidas.com/video/upload/q_auto,vc_auto,c_scale,w_0.5/video/upload/dtc-Training22Q1-hp-teaser-carousel-v2-t_fnnmm3.mp4',
            title: 'Train to chill',
            description: ['Raising your BPM or bringing it down. Exclusive drops only available at adidas have you covered.']
        },
        {
            video: 'https://brand.assets.adidas.com/video/upload/q_auto,vc_auto,c_scale,w_0.5/video/upload/originals-fw21-zx-5k-onsites-launch-hp-teaser-carousel-dual-dtm_g1olkw.mp4',
            title: 'Feel the ZX',
            description: ['Thân giày cá tính ôm trọn bàn chân bạn với nhiều lớp chất liệu đậm chất tương lai. Cảm nhận sự thoải mái.']
        },
        {
            video: 'https://brand.assets.adidas.com/video/upload/q_auto,vc_auto,c_scale,w_0.5/video/upload/running-ss22-adizero-hp-teaser-carousel-3d-d_jjbnqe.mp4',
            title: 'some shoes, some years',
            description: ['With the help of the adizero, our athletes ran the records in 2021.', "2021 is all but done, but we're just getting started. "]
        },
        {
            img: 'https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/viVN/Images/fw21-pw-hu_nmd-bbc-tcc_tcm337-796101.jpg',
            title: 'hu nmd bbc',
            description: ["As a nod to Billionaire Boys Club, Pharrell's signature silhouette features BBC's iconic logo. Out now."]
        },
        {
            img: 'https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/viVN/Images/running-ss22-adistar-december-catlp-teaser-carousel-d_tcm337-799604.jpg',
            title: 'supportive',
            description: ['giày chạy đường dài']
        }

    ]

    const items = rawSource.map((e) => {
        if (e.img) {
            return <WhatsHotCard img={e.img} title={e.title} description={e.description} />
        } else {
            return <WhatsHotCard video={e.video} title={e.title} description={e.description} />
        }
    })


    // const items = [
    //     <WhatsHotCard img={source} title={'Chạy bộ với giày supernova'} description='Năng lượng kết hợp sự thoải mái. Đã mở bán.' />,
    //     <WhatsHotCard video={videoSource} title={'Chạy bộ với giày supernova'} description='Năng lượng kết hợp sự thoải mái. Đã mở bán.' />,
    //     <WhatsHotCard img={source} title={'Chạy bộ với giày supernova'} description='Năng lượng kết hợp sự thoải mái. Đã mở bán.' />,
    //     <WhatsHotCard img={source} title={'Chạy bộ với giày supernova'} description='Năng lượng kết hợp sự thoải mái. Đã mở bán.' />,
    //     <WhatsHotCard img={source} title={'Chạy bộ với giày supernova'} description='Năng lượng kết hợp sự thoải mái. Đã mở bán.' />,
    // ]

    return <div className={classes.container} style={{ marginTop: '80px' }}>
        <h4 className={classes.h4}>what's hot</h4>
        <InnerCarousel items={items} className={"whats-hot"}/>
    </div>;
}
