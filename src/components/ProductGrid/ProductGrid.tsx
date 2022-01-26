import React from 'react';
import ProductCard from '../ProductCard/ProductCard';
import useStyles from './ProductGrid.styles';

export default function ProductGrid() {
    const classes = useStyles();

    const data = [
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

    const mapDataToProduct = () => {
        return data.map((e: any) => {
            return <ProductCard item={e} inList={false} />
        })
    }

    return <div className={classes.grid}>
        {mapDataToProduct()}
    </div>;
}
