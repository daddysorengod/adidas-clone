import React from 'react';
import whatHotStyles from '../WhatsHot/WhatsHot.styles'
import ProductCard from '@app/components/ProductCard/ProductCard';
import { Container } from '@material-ui/core';
import InnerCarousel from '@app/components/Carousel/InnerCarousel';


export default function BestAdidas() {
    const whatHotClasses = whatHotStyles();

    const products = [
        {
            name: 'superstar',
            category: 'Nam Originals',
            price: 2500000,
            salePrice: 2000000,
            subimg: "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/8c7fcb9d65c143b4a3c8ad7800ac1820_9366/ultraboost-22.jpg",
            img: "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/5ae921bb08034aa2803fad7800abdd7f_9366/ultraboost-22.jpg",
            colors: [

            ],
        },
        {
            name: 'superstar',
            category: 'Nam Originals',
            price: 2500000,
            subimg: "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/8c7fcb9d65c143b4a3c8ad7800ac1820_9366/ultraboost-22.jpg",
            img: "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/5ae921bb08034aa2803fad7800abdd7f_9366/ultraboost-22.jpg",
            colors: [

            ],
        },
        {
            name: 'superstar',
            category: 'Nam Originals',
            price: 2500000,
            subimg: "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/8c7fcb9d65c143b4a3c8ad7800ac1820_9366/ultraboost-22.jpg",
            img: "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/5ae921bb08034aa2803fad7800abdd7f_9366/ultraboost-22.jpg",
            colors: [

            ],
        },
        {
            name: 'superstar',
            category: 'Nam Originals',
            price: 2500000,
            subimg: "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/8c7fcb9d65c143b4a3c8ad7800ac1820_9366/ultraboost-22.jpg",
            img: "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/5ae921bb08034aa2803fad7800abdd7f_9366/ultraboost-22.jpg",
            colors: [

            ],
        },
        {
            name: 'superstar',
            category: 'Nam Originals',
            price: 2500000,
            subimg: "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/8c7fcb9d65c143b4a3c8ad7800ac1820_9366/ultraboost-22.jpg",
            img: "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/5ae921bb08034aa2803fad7800abdd7f_9366/ultraboost-22.jpg",
            colors: [

            ],
        },
        {
            name: 'superstar',
            category: 'Nam Originals',
            price: 2500000,
            subimg: "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/8c7fcb9d65c143b4a3c8ad7800ac1820_9366/ultraboost-22.jpg",
            img: "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/5ae921bb08034aa2803fad7800abdd7f_9366/ultraboost-22.jpg",
            colors: [

            ],
        },
        {
            name: 'superstar',
            category: 'Nam Originals',
            price: 2500000,
            subimg: "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/8c7fcb9d65c143b4a3c8ad7800ac1820_9366/ultraboost-22.jpg",
            img: "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/5ae921bb08034aa2803fad7800abdd7f_9366/ultraboost-22.jpg",
            colors: [

            ],
        },
        {
            name: 'superstar',
            category: 'Nam Originals',
            price: 2500000,
            subimg: "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/8c7fcb9d65c143b4a3c8ad7800ac1820_9366/ultraboost-22.jpg",
            img: "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/5ae921bb08034aa2803fad7800abdd7f_9366/ultraboost-22.jpg",
            colors: [

            ],
        },
    ]

    const items = products.map(p => {
        return <ProductCard item={p} inList={true} flexWidthBottom={true} />
    })

    return <div className='best-adidas' style={{ marginTop: '80px' }}>
        <div className={whatHotClasses.container}>
            <h4 className={whatHotClasses.h4}>Best of Adidas</h4>
            <InnerCarousel items={items} pagination={true} slidesPerGroup={5} className={"best-adidas"} />
        </div>
    </div>;
}
