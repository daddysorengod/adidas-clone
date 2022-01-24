import { Container } from '@material-ui/core';
import React from 'react';
import InterestedSlider from './InterestedSlider';
import useStyles from './StillInterested.styles'
export default function StillInterested(props: any) {
    const classes = useStyles();

    const items = [
        {
            name: 'Giày Adizero Takumi Sen 8',
            category: 'Nam Chạy',
            price: 5200200,
            subimg: "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/8c7fcb9d65c143b4a3c8ad7800ac1820_9366/ultraboost-22.jpg",
            img: "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/5ae921bb08034aa2803fad7800abdd7f_9366/ultraboost-22.jpg",
            colors: [
               
            ],
            isNew: true
        },
        {
            name: 'Giày Adizero Takumi Sen 8',
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
            ],
            isNew: true
        },
        {
            name: 'Giày Adizero Takumi Sen 8',
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
            ],
            isNew: true
        },
        {
            name: 'Giày Adizero Takumi Sen 8',
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
            ],
            isNew: true
        },
        {
            name: 'Giày Adizero Takumi Sen 8',
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
            ],
            isNew: true
        },
        {
            name: 'Giày Adizero Takumi Sen 8',
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
            ],
            isNew: true
        },
        {
            name: 'Giày Adizero Takumi Sen 8',
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
            ],
            isNew: true
        },
        {
            name: 'Giày Adizero Takumi Sen 8',
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
            ],
            isNew: true
        },
        {
            name: 'Giày Adizero Takumi Sen 8',
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
            ],
            isNew: true
        },
        {
            name: 'Giày Adizero Takumi Sen 8',
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
            ],
            isNew: true
        },
        
    ]

    return <div className={classes.interested} >
        <Container>
            <h2 className={classes.h2}>Still interested?</h2>
            <div>
                <a href="#" className={classes.a}> ULTRABOOST 22</a>
                <a href="#" className={classes.a}>GIÀY ULTRABOOST 22</a>
            </div>
        </Container>
        <div className={`interested-carousel ${classes.carousel}`}>
            <InterestedSlider items={items}/>
        </div>
    </div>;
}
