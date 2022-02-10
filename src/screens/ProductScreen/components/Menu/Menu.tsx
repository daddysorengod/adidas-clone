import ProductGrid from '@app/components/ProductGrid/ProductGrid';
import React from 'react';
import HorizontalBar from '../HorizontalBar/HorizontalBar';
import useStyles from './Menu.styles';
export default function Menu() {
    const classes = useStyles();
    return <div style={{ padding: '0 15px' }}>
        <div className={classes.breadcrumbs}>
            <ul className={classes.ul}>
                <li>
                    <button className={classes.button}>
                        <span style={{ marginRight: '10px' }}>{'<='}</span>
                        <span style={{ textDecoration: 'underline' }}>TRỞ LẠI</span>
                    </button>
                </li>
                <li>
                    <a href="#" className={classes.a}> Trang Chủ </a>
                </li>
                <li>
                    <span>&nbsp;/ </span>
                    <a href="#" className={classes.a}>Nam </a>
                </li>
                <li>
                    <span>&nbsp;/ </span>
                    <a href="#" className={classes.a}>Giày </a>
                </li>
            </ul>
        </div>
        <div className={classes.title}>
            <h1 className={classes.h1}>
                <span>NAM</span>
                <span style={{ color: '#767677' }}> · </span>
                <span>GIÀY</span>
            </h1>
            &nbsp;
            <div className={classes.totalOfProduct}>[473]</div>
        </div>
        <HorizontalBar />
        <div className={classes.currentFilter} >
            <a href="" className={classes.filter}>
                <span style={{ marginRight: '8px' }}>Nam</span>
                <span style={{ fontSize: '11px' }}>x</span>
            </a>
            <a href="" className={classes.filter}>
                <span style={{ marginRight: '8px' }}>Giày</span>
                <span style={{ fontSize: '11px' }}>x</span>
            </a>
            <a href="" className={classes.clearAllBtn}>
                <span>Clear All</span>
            </a>
        </div>
        <ProductGrid />
    </div >;
}
