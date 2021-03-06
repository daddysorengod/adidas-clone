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
        { title: "H??ng m???i v???", link: '#' },
        { title: "Nh???ng m???t h??ng b??n ch???y nh???t tu???n n??y", link: '#' },
        { title: " ", link: "" },
        { title: "Hi???u n??ng", link: "" },
        { title: "Originals", link: "" },
        { title: "Lego", link: "" },
        { title: "Aaron kai x adidas", link: "" }
    ]

    const juvenile = [
        { title: "Qu???n ??o b?? trai", link: '#' },
        { title: "Qu???n ??o b?? g??i", link: "#" },
        { title: " ", link: "" },
        { title: "Gi??y b?? trai", link: "#" },
        { title: "Gi??y b?? g??i", link: "#" }
    ]

    const toddlers = [
        { title: "Qu???n ??o", link: '#' },
        { title: "Gi??y", link: '#' }
    ]

    const sales = [
        { title: "Gi??y", link: '#' },
        { title: "Qu???n ??o", link: '#' },
        { title: "Ph??? ki???n", link: '#' }
    ]

    const sports = [
        { title: "T???p luy???n", link: '#' },
        { title: "B??ng ????", link: '#' },
        { title: "Ch???y", link: '#' },
        { title: "????nh g??n", link: '#' }
    ]

    const allProducts = [
        { title: "T???t c??? s???n ph???m d??nh cho Tr??? Em", link: '#' },
        { title: "T???t c??? s???n ph???m d??nh cho Thanh Thi???u Ni??n", link: "#" },
        { title: "T???t c??? s???n ph???m d??nh cho Tr??? Em", link: "#" },
        { title: "T???t c??? s???n ph???m d??nh cho Tr??? Nh???", link: '#' },
        { title: "T???t c??? s???n ph???m d??nh cho Th??? Thao", link: '#' },
        { title: "", link: "#" }
    ]

    return (
        <div className={classes.childrenMenu} >
            <div className={classes.childrenDiv} style={{ padding: '0 20px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <div className={`${classes.col} ${classes.firstColHeader}`}>
                        <div className={classes.colHeader}>
                            <a href="#" className={classes.link}>?????c s???c</a>
                        </div>
                        <ChildrenMenuColumn array={specials} classes={classes} />
                    </div>
                    <div className={classes.col}>
                        <div className={classes.colHeader}>
                            <a href="#" className={classes.link}>Thanh Thi???u Ni??n (8-16)</a>
                        </div>
                        <ChildrenMenuColumn array={juvenile} classes={classes} />
                    </div>
                    <div className={classes.col}>
                        <div className={classes.colHeader}>
                            <a href="" className={classes.link}>Tr??? Em (4-8)</a>
                        </div>
                        <ChildrenMenuColumn array={juvenile} classes={classes} />
                    </div>
                    <div className={classes.col}>
                        <div className={classes.colHeader}>
                            <a href="#" className={classes.link}> Tr??? Nh??? & Tr??? M???i Bi???t ??i (1-4)</a>
                        </div>
                        <ChildrenMenuColumn array={toddlers} classes={classes} />
                    </div>
                    <div className={classes.col}>
                        <div className={classes.colHeader}>
                            <a href="" className={classes.link}>Gi???m Gi??</a>
                        </div>
                        <ChildrenMenuColumn array={sales} classes={classes} />
                    </div>
                    <div className={classes.col}>
                        <div className={classes.colHeader}>
                            <a href="" className={classes.link}>Th??? Thao</a>
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
            {array.map((e: any) => {
                return <li key={e} className={`${classes.promo} ${e.title === " " && classes.seperator}`}>
                    <a className={classes.link} href="#">{e.title}</a>
                </li>
            })}
        </ul>
    )
}

