import InnerCarousel from '@app/components/Carousel/InnerCarousel';
import ProductCarousel from '@app/components/Carousel/ProductCarousel';
import ProductCard from '@app/components/ProductCard/ProductCard';
import React from 'react';
import useStyles from './RecentlyViewed.styles';
export default function RecentlyViewed() {
    const classes = useStyles();

    const products = [
        {
            name: 'superstar',
            category: 'Nam Originals',
            price: 2500000,
            img: "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/8c7fcb9d65c143b4a3c8ad7800ac1820_9366/ultraboost-22.jpg",
            // subimg: "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/5ae921bb08034aa2803fad7800abdd7f_9366/ultraboost-22.jpg",
            colors: [

            ],
        },
        {
            name: 'superstar',
            category: 'Nam Originals',
            price: 2500000,
            img: "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/8c7fcb9d65c143b4a3c8ad7800ac1820_9366/ultraboost-22.jpg",
            // subimg: "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/5ae921bb08034aa2803fad7800abdd7f_9366/ultraboost-22.jpg",
            colors: [

            ],
        },
        {
            name: 'superstar',
            category: 'Nam Originals',
            price: 2500000,
            img: "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/8c7fcb9d65c143b4a3c8ad7800ac1820_9366/ultraboost-22.jpg",
            // subimg: "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/5ae921bb08034aa2803fad7800abdd7f_9366/ultraboost-22.jpg",
            colors: [

            ],
        },
        {
            name: 'superstar',
            category: 'Nam Originals',
            price: 2500000,
            img: "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/8c7fcb9d65c143b4a3c8ad7800ac1820_9366/ultraboost-22.jpg",
            // subimg: "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/5ae921bb08034aa2803fad7800abdd7f_9366/ultraboost-22.jpg",
            colors: [

            ],
        },
        {
            name: 'superstar',
            category: 'Nam Originals',
            price: 2500000,
            img: "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/8c7fcb9d65c143b4a3c8ad7800ac1820_9366/ultraboost-22.jpg",
            // subimg: "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/5ae921bb08034aa2803fad7800abdd7f_9366/ultraboost-22.jpg",
            colors: [

            ],
        },
        {
            name: 'superstar',
            category: 'Nam Originals',
            price: 2500000,
            img: "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/8c7fcb9d65c143b4a3c8ad7800ac1820_9366/ultraboost-22.jpg",
            // subimg: "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/5ae921bb08034aa2803fad7800abdd7f_9366/ultraboost-22.jpg",
            colors: [

            ],
        },
    ]

    const items = products.map(p => {
        return <ProductCard item={p} inList={true} flexWidthBottom={true} />
    })

    return <div>
        <h3 className={classes.h3}>Sản phẩm xem gần đây</h3>
        <div>
            <InnerCarousel items={items} pagination={true} slidesPerGroup={10} className={"recently-viewed"} />
        </div>
    </div>;
}
