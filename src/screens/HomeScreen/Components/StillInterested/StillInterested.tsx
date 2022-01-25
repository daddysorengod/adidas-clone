import { Container } from '@material-ui/core';
import React from 'react';
import InterestedSlider from './InterestedSlider';
import useStyles from './StillInterested.styles'
export default function StillInterested(props: any) {
    const classes = useStyles();

    const items = [
        {
            name: 'Adu dark ưa',
            category: 'Nam Chạy',
            price: 5200200,
            subimg: "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/8c7fcb9d65c143b4a3c8ad7800ac1820_9366/ultraboost-22.jpg",
            img: "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/5ae921bb08034aa2803fad7800abdd7f_9366/ultraboost-22.jpg",
            colors: [
                {
                    mainImg: "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/8c7fcb9d65c143b4a3c8ad7800ac1820_9366/ultraboost-22.jpg",
                    subImg: "https://assets.adidas.com/images/w_85,h_85,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/8c7fcb9d65c143b4a3c8ad7800ac1820_9366/ultraboost-22.jpg"
                },
                {
                    mainImg: "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/60ae9c571c214ad69193ad7800a40006_9366/giày-ultraboost-22.jpg",
                    subImg: "https://assets.adidas.com/images/w_85,h_85,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/60ae9c571c214ad69193ad7800a40006_9366/giày-ultraboost-22.jpg",
                },
                {
                    mainImg: "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/d4e26a75209b4a8aae70ad9000fc8068_9366/ultraboost-22.jpg",
                    subImg: "https://assets.adidas.com/images/w_85,h_85,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/d4e26a75209b4a8aae70ad9000fc8068_9366/ultraboost-22.jpg",
                },
                {
                    mainImg: "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/d181481144c24ae3aba5ad7900d3f5c8_9366/ultraboost-22.jpg",
                    subImg: "https://assets.adidas.com/images/w_85,h_85,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/d181481144c24ae3aba5ad7900d3f5c8_9366/ultraboost-22.jpg"
                },
                {
                    mainImg: "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/d181481144c24ae3aba5ad7900d3f5c8_9366/ultraboost-22.jpg",
                    subImg: "https://assets.adidas.com/images/w_85,h_85,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/d181481144c24ae3aba5ad7900d3f5c8_9366/ultraboost-22.jpg"
                },
                {
                    mainImg: "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/d181481144c24ae3aba5ad7900d3f5c8_9366/ultraboost-22.jpg",
                    subImg: "https://assets.adidas.com/images/w_85,h_85,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/d181481144c24ae3aba5ad7900d3f5c8_9366/ultraboost-22.jpg"
                },
                {
                    mainImg: "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/d181481144c24ae3aba5ad7900d3f5c8_9366/ultraboost-22.jpg",
                    subImg: "https://assets.adidas.com/images/w_85,h_85,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/d181481144c24ae3aba5ad7900d3f5c8_9366/ultraboost-22.jpg"
                },
                {
                    mainImg: "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/d181481144c24ae3aba5ad7900d3f5c8_9366/ultraboost-22.jpg",
                    subImg: "https://assets.adidas.com/images/w_85,h_85,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/d181481144c24ae3aba5ad7900d3f5c8_9366/ultraboost-22.jpg"
                }
                ,
                {
                    mainImg: "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/d181481144c24ae3aba5ad7900d3f5c8_9366/ultraboost-22.jpg",
                    subImg: "https://assets.adidas.com/images/w_85,h_85,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/d181481144c24ae3aba5ad7900d3f5c8_9366/ultraboost-22.jpg"
                },
                {
                    mainImg: "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/d181481144c24ae3aba5ad7900d3f5c8_9366/ultraboost-22.jpg",
                    subImg: "https://assets.adidas.com/images/w_85,h_85,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/d181481144c24ae3aba5ad7900d3f5c8_9366/ultraboost-22.jpg"
                }
                ,
                {
                    mainImg: "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/d181481144c24ae3aba5ad7900d3f5c8_9366/ultraboost-22.jpg",
                    subImg: "https://assets.adidas.com/images/w_85,h_85,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/d181481144c24ae3aba5ad7900d3f5c8_9366/ultraboost-22.jpg"
                },
                {
                    mainImg: "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/d181481144c24ae3aba5ad7900d3f5c8_9366/ultraboost-22.jpg",
                    subImg: "https://assets.adidas.com/images/w_85,h_85,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/d181481144c24ae3aba5ad7900d3f5c8_9366/ultraboost-22.jpg"
                }
            ],
            isNew: true
        },
        {
            name: 'ZX 5K BOOST shoes',
            category: 'Originals',
            price: 4200000,
            subimg: "https://assets.adidas.com/images/w_600,f_auto,q_auto/7df69015a9024149b7f5ad490115139c_9366/Giay_ZX_5K_Boost_Xam_GV7701_01_standard.jpg",
            img: "https://assets.adidas.com/images/w_600,f_auto,q_auto/7df69015a9024149b7f5ad490115139c_9366/Giay_ZX_5K_Boost_Xam_GV7701_01_standard.jpg",
            colors: []
        },
        {
            name: 'Camo Festival Bag',
            category: 'Originals',
            price: 500000,
            subimg: " https://assets.adidas.com/images/w_600,f_auto,q_auto/5d28a47b28964eb995dbad1300adf5f6_9366/Tui_Festival_Camo_Xam_H34628_01_standard.jpg",
            img: " https://assets.adidas.com/images/w_600,f_auto,q_auto/5d28a47b28964eb995dbad1300adf5f6_9366/Tui_Festival_Camo_Xam_H34628_01_standard.jpg",
            colors: []
        },
        {
            name: '3-Stripes Leggings',
            category: 'Originals',
            price: 800000,
            subimg: " https://assets.adidas.com/images/w_600,f_auto,q_auto/c008ade358794be8b742aa4e01477736_9366/Quan_legging_3_Soc_DJen_ED7820_01_laydown.jpg",
            img: "https://assets.adidas.com/images/w_600,f_auto,q_auto/c008ade358794be8b742aa4e01477736_9366/Quan_legging_3_Soc_DJen_ED7820_01_laydown.jpg",
            colors: []
        },
        
       
    ]

    return <div className={classes.interested} >
        <div className={classes.container}>
            <h2 className={classes.h2}>Still interested?</h2>
            <div>
                <a href="#" className={classes.a}> ULTRABOOST 22</a>
                <a href="#" className={classes.a}>GIÀY ULTRABOOST 22</a>
            </div>
        </div>
        <div className={`interested-carousel ${classes.carousel}`}>
            <InterestedSlider items={items} />
        </div>
    </div>;
}
