import React, { useEffect, useRef, useState } from 'react'
import { FavoriteBorder as FavoriteBorderIcon } from '@material-ui/icons'
// import MiniSlider from '../Slider/MiniSlider';
import { moneyFormat } from '@app/helpers';
import useStyles from "./ProductCard.styles";
import ProductCarousel from '../Carousel/ProductCarousel';


interface ProductCardProps {
    item: any,
    inList: boolean,
    flexWidthBottom?: boolean
}

export default function ProductCard(props: ProductCardProps ) {
    const { item, inList, flexWidthBottom } = props;

    const [onHover, setOnHover] = useState(false);
    const [onHoverAsset, setOnHoverAsset] = useState(false);
    const [onColorPreview, setOnColorPreview] = useState(null);
    const priceRef: any = useRef(null);
    const classes = useStyles();

    useEffect(() => {
        if (onHover && priceRef && priceRef.current && priceRef.current.style) {
            priceRef.current.style.bottom = '5px'
        } else {
            priceRef.current.style.bottom = '-5px'
        }
    }, [onHover])

    const caculatePreviewImg = (): string => {
        if (onColorPreview !== null) {
            return item.colors[onColorPreview].mainImg
        }
        return onHoverAsset ? item.img : item.subimg
    }


    return (
        <div
            onMouseOver={() => { setOnHover(true) }}
            onMouseLeave={() => { setOnHover(false) }}
            style={{ position: 'relative' }}
        >
            <div
                className={`${classes.innerCard} ${onHover && classes.innerCardActive}`}
            >
                <div className={classes.cardAsset}>
                    <button className={classes.wishListBtn}>
                        <FavoriteBorderIcon style={{ fontSize: 18 }} />
                    </button>
                    <div
                        className={classes.productPrice}
                        ref={priceRef}
                    >
                        {/* 5.200.200₫ */}
                        <span style={{
                            textDecoration: `${item.salePrice ? 'line-through' : 'none'}`,
                            color: `${item.salePrice ? '#767677' : 'inherit'}`
                        }}>
                            {`${moneyFormat(item.price)}₫`}
                        </span>
                        {item.salePrice && <span style={{ color: '#e32b2b', marginLeft: '5px' }}>
                            {`${moneyFormat(item.salePrice)}₫`}
                        </span>}
                    </div>
                    <a href="#"
                        onMouseOver={() => { setOnHoverAsset(true) }}
                        onMouseLeave={() => { setOnHoverAsset(false) }}
                    >
                        <img
                            className={classes.assetImage}
                            src={caculatePreviewImg()}
                            alt="image"
                            sizes={"(min-width: 960px) 25vw, (min-width: 600px) 33vw, 49vw"}
                        />
                    </a>
                </div>
                {(onHover && !inList) && <div className={classes.productCarousel} style={{ marginTop: '2px' }}>
                    <ProductCarousel
                        items={item.colors}
                        setOnColorPreview={setOnColorPreview}
                    />
                </div>}
                <div className={classes.cardDetail} style={{ height: `${flexWidthBottom ? '100%' : '129px'}` }}>
                    <p className={`${classes.productTitle} ${classes.productParagraph}`}>
                        {item.name}
                    </p>
                    <p className={`${classes.productCategory} ${classes.productParagraph}`}>
                        {item.category}
                    </p>
                    <p className={`${classes.productLabel} ${classes.productParagraph}`}>
                        {(item.colors.length.toString() > 0 && !inList) &&
                            <>
                                <span className={`${classes.productColorCount} ${classes.productParagraph}`}>
                                    {`${item.colors.length.toString()} colours`}
                                </span>
                                <span className={`${classes.productCategory} ${classes.productParagraph}`}> · </span>
                            </>
                        }
                        <span>{item.isNew ? 'mới' : ''}</span>
                    </p>
                </div>
            </div>
        </div >
    )
}
