import ProductGrid from '@app/components/ProductGrid/ProductGrid';
import React from 'react';
import useStyles from './Menu.styles';
export default function Menu() {
    const classes = useStyles();
    return <div style={{ padding: '0 15px' }}>
        <div className="breadcrumbs">
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
        <div className={classes.title} style={{ marginTop: '30px' }}>
            <h1 className={classes.h1}>
                <span>NAM</span>
                <span style={{ color: '#767677' }}> · </span>
                <span>GIÀY</span>
            </h1>
            &nbsp;
            <div className={classes.totalOfProduct}>[473]</div>
        </div>
        <div className={classes.horizontalBar}>
            <div className={classes.horizontalBarItem} style={{ fontWeight: '700' }}>{'Nhãn Hiệu >'}</div>
            <div className={classes.horizontalBarItem} >{'Thể Thao >'}</div>
            <div className={classes.horizontalBarItem} >{'Loại Sản Phẩm >'}</div>
            <div className={classes.horizontalBarItem} >{'Kích Cỡ >'}</div>
            <div className={classes.horizontalBarItem} >{'Màu >'}</div>
            <div className={classes.horizontalBarItem} >{'Bộ Sưu Tập >'}</div>
            <div className={classes.horizontalBarItem} >{'New Arrivals >'}</div>
        </div>
        <div style={{ padding: '12px 0' }}>
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
        <ProductGrid/>
    </div>;
}
