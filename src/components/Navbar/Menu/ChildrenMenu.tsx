import React from 'react'

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    childrenMenu: {
        backgroundColor: 'white',
        // '@media (min-width: 1280px)': {
        //     display: 'flex',
        //     justifyContent: 'center'
        // },
        [theme.breakpoints.up('lg')]: {
            display: 'flex',
            justifyContent: 'center'
        },
        position: 'absolute',
        borderTop: '1px solid #e9ecef',
        width: '100%',
        zIndex: 10
    },
    childrenDiv: {
        [theme.breakpoints.up('lg')]: {
            maxWidth: '1065px',
        }
    },
    col: {
        flex: 1,
        padding: '40px 0',
        marginRight: '20px',
        lineHeight: '13px'
    },
    subCol: {
        flex: 1,
        marginRight: '20px',
        lineHeight: '16px'
    },
    colHeader: {
        letterSpacing: '2px',
        margin: '0 0 14px 0',
        textTransform: 'uppercase',
        fontWeight: 'bold',
        fontSize: '13px !important'
    },
    responsiveCol: {
        [theme.breakpoints.up('lg')]: {
            flexBasis: '280px',
            flexGrow: 0,
            flexShrink: 0,
        }
    },
    firstColHeader: {
        [theme.breakpoints.up('lg')]: {
            flexBasis: '280px',
            flexGrow: 0,
            flexShrink: 0,
            borderRight: '1px solid  #e9ecef'
        },
    },
    promo: {
        marginBottom: '10px'
    },
    ul: {
        listStyle: 'none',
        padding: 0
    },
    link: {
        textDecoration: 'none',
        fontSize: '13px',
        color: 'black',
        "&:hover": {
            textDecoration: 'underline'
        }
    },
    lineBreaker: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: "100%",
        height: "1px",
        backgroundColor: "#e9ecef",
    },
    seperator: {
        width: '16px',
        height: '5px'
    }
}));

export function ChildrenMenu() {
    const classes = useStyles();

    const specials = [
        { title: "Hàng mới về", link: '#' },
        { title: "Những mặt hàng bán chạy nhất tuần này", link: '#' },
        { title: " ", link: "" },
        { title: "Hiệu năng", link: "" },
        { title: "Originals", link: "" },
        { title: "Lego", link: "" },
        { title: "Aaron kai x adidas", link: "" }
    ]

    const juvenile = [
        { title: "Quần áo bé trai", link: '#' },
        { title: "Quần áo bé gái", link: "#" },
        { title: " ", link: "" },
        { title: "Giày bé trai", link: "#" },
        { title: "Giày bé gái", link: "#" }
    ]

    const toddlers = [
        { title: "Quần áo", link: '#' },
        { title: "Giày", link: '#' }
    ]

    const sales = [
        { title: "Giày", link: '#' },
        { title: "Quần áo", link: '#' },
        { title: "Phụ kiện", link: '#' }
    ]

    const sports = [
        { title: "Tập luyện", link: '#' },
        { title: "Bóng Đá", link: '#' },
        { title: "Chạy", link: '#' },
        { title: "Đánh gôn", link: '#' }
    ]

    const allProducts = [
        { title: "Tất cả sản phẩm dành cho Trẻ Em", link: '#' },
        { title: "Tất cả sản phẩm dành cho Thanh Thiếu Niên", link: "#" },
        { title: "Tất cả sản phẩm dành cho Trẻ Em", link: "#" },
        { title: "Tất cả sản phẩm dành cho Trẻ Nhỏ", link: '#' },
        { title: "Tất cả sản phẩm dành cho Thể Thao", link: '#' },
        { title: "", link: "#" }
    ]

    return (
        <div className={classes.childrenMenu} >
            <div className={classes.childrenDiv} style={{ padding: '0 20px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <div className={`${classes.col} ${classes.firstColHeader}`}>
                        <div className={classes.colHeader}>
                            <a href="#" className={classes.link}>Đặc sắc</a>
                        </div>
                        <ChildrenMenuColumn array={specials} classes={classes} />
                    </div>
                    <div className={classes.col}>
                        <div className={classes.colHeader}>
                            <a href="#" className={classes.link}>Thanh Thiếu Niên (8-16)</a>
                        </div>
                        <ChildrenMenuColumn array={juvenile} classes={classes} />
                    </div>
                    <div className={classes.col}>
                        <div className={classes.colHeader}>
                            <a href="" className={classes.link}>Trẻ Em (4-8)</a>
                        </div>
                        <ChildrenMenuColumn array={juvenile} classes={classes} />
                    </div>
                    <div className={classes.col}>
                        <div className={classes.colHeader}>
                            <a href="#" className={classes.link}> Trẻ Nhỏ & Trẻ Mới Biết Đi (1-4)</a>
                        </div>
                        <ChildrenMenuColumn array={toddlers} classes={classes} />
                    </div>
                    <div className={classes.col}>
                        <div className={classes.colHeader}>
                            <a href="" className={classes.link}>Giảm Giá</a>
                        </div>
                        <ChildrenMenuColumn array={sales} classes={classes} />
                    </div>
                    <div className={classes.col}>
                        <div className={classes.colHeader}>
                            <a href="" className={classes.link}>Thể Thao</a>
                        </div>
                        <ChildrenMenuColumn array={sports} classes={classes} />
                    </div>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 0', position: 'relative' }}>
                    <div className={classes.lineBreaker}></div>
                    {allProducts.map((e, index) => {
                        return <div className={`${classes.subCol} ${index === 0 && classes.responsiveCol}`}>
                            <a href="#" className={classes.link}>
                                <strong style={{ fontSize: '13px' }}>
                                    {e.title}
                                </strong>
                            </a>
                        </div>
                    })}
                </div>
            </div>
        </div>
    )
}

function ChildrenMenuColumn(props: any) {
    const { array, classes } = props;
    return (
        <ul className={classes.ul}>
            {array.map((e: any, index: number) => {
                return <li key={index} className={`${classes.promo} ${e.title === " " && classes.seperator}`}>
                    <a className={classes.link} href="#">{e.title}</a>
                </li>
            })}
        </ul>
    )
}

