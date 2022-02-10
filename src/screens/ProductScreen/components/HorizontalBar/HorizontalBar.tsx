import useWindowOffset from '@app/hooks/useWindowOffset';
import React, { useEffect, useRef, useState } from 'react';
import useStyles from '../Menu/Menu.styles';
export default function HorizontalBar() {
    const classes = useStyles();
    const horizontalBar = useRef(null);
    const fixedBar = useRef(null);
    const [fixed, setFixed] = useState(false);


    const [lastScroll, setLastScroll] = useState(0);
    const offset = useWindowOffset();


    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    //up: true, down: false
    useEffect(() => {
        if ((offset > lastScroll) && fixedBar && fixedBar.current) {
            fixedBar.current.style.top = '0px'
        } else if ((offset < lastScroll) && fixedBar && fixedBar.current) {
            fixedBar.current.style.top = '110px'
        }
        setLastScroll(offset);
    }, [offset]);

    const handleScroll = (e: any) => {
        const currentPos = horizontalBar?.current?.getBoundingClientRect()?.top;
        if (currentPos <= 10) {
            setFixed(true);
        } else if (currentPos > 10) {
            setFixed(false);
        }
    }

    return <div ref={horizontalBar} className={classes.horizontalBar} style = {{ height: '52px' }}>
        <div ref={fixedBar} className={`${fixed ? classes.fixed : ''}`}>
            <div className={`${classes.horizontalBarInner} ${fixed ? classes.innerFixed : ''}`} >
                <div style={{ maxHeight: '40px', flexBasis: '70%' }}>
                    <div style={{ height: '100%', display: 'flex', flexWrap: 'wrap', overflow: 'hidden' }}>
                        <div className={classes.horizontalBarItem} style={{ fontWeight: '700' }}>{'Nhãn Hiệu >'}</div>
                        <div className={classes.horizontalBarItem} >{'Thể Thao >'}</div>
                        <div className={classes.horizontalBarItem} >{'Loại Sản Phẩm >'}</div>
                        <div className={classes.horizontalBarItem} >{'Kích Cỡ >'}</div>
                        <div className={classes.horizontalBarItem} >{'Màu >'}</div>
                        <div className={classes.horizontalBarItem} >{'Bộ Sưu Tập >'}</div>
                        <div className={classes.horizontalBarItem} >{'New Arrivals >'}</div>
                    </div>
                </div>
                <div>
                    <div className={classes.horizontalBarItem}>sort by</div>
                </div>
            </div>
        </div>
    </div >;
}
