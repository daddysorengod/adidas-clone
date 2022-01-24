import React from 'react';
import InnerCarousel from '@app/components/Carousel/InnerCarousel';
import { Container } from '@material-ui/core';
import ProductCard from '@app/components/ProductCard/ProductCard';
import useStyles from './NewArrivals.styles'
import whatHotStyles from '../WhatsHot/WhatsHot.styles'

export default function NewArrivals() {
    const whatHotClasses = whatHotStyles();
    const classes = useStyles();

    const products = [
        {
            name: 'superstar',
            category: 'Nam Originals',
            price: 2500000,
            subimg: "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/8c7fcb9d65c143b4a3c8ad7800ac1820_9366/ultraboost-22.jpg",
            img: "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/5ae921bb08034aa2803fad7800abdd7f_9366/ultraboost-22.jpg",
            colors: [

            ],
            isNew: true
        },
        {
            name: 'superstar',
            category: 'Nam Originals',
            price: 2500000,
            subimg: "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/8c7fcb9d65c143b4a3c8ad7800ac1820_9366/ultraboost-22.jpg",
            img: "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/5ae921bb08034aa2803fad7800abdd7f_9366/ultraboost-22.jpg",
            colors: [

            ],
            isNew: true
        },
        {
            name: 'superstar',
            category: 'Nam Originals',
            price: 2500000,
            subimg: "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/8c7fcb9d65c143b4a3c8ad7800ac1820_9366/ultraboost-22.jpg",
            img: "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/5ae921bb08034aa2803fad7800abdd7f_9366/ultraboost-22.jpg",
            colors: [

            ],
            isNew: true
        },
        {
            name: 'superstar',
            category: 'Nam Originals',
            price: 2500000,
            subimg: "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/8c7fcb9d65c143b4a3c8ad7800ac1820_9366/ultraboost-22.jpg",
            img: "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/5ae921bb08034aa2803fad7800abdd7f_9366/ultraboost-22.jpg",
            colors: [

            ],
            isNew: true
        },
        {
            name: 'superstar',
            category: 'Nam Originals',
            price: 2500000,
            subimg: "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/8c7fcb9d65c143b4a3c8ad7800ac1820_9366/ultraboost-22.jpg",
            img: "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/5ae921bb08034aa2803fad7800abdd7f_9366/ultraboost-22.jpg",
            colors: [

            ],
            isNew: true
        },
    ]

    const items = products.map(p => {
        return <ProductCard item={p} inList={true} />
    })



    return <div className="new-arrivals" style={{ marginTop: '80px' }}>
        <div className={classes.container}>
            <h4 className={whatHotClasses.h4}>New Arrivals</h4>
            <InnerCarousel pagination={true} items={items} slidesPerGroup={4} />
        </div>
    </div>;
}
