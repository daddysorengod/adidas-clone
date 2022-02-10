import React, { useState } from 'react';
import useStyles from '../../ProductScreen.styles';
export default function PageNumber(props: { currentPage: number, totalPages: number }) {
    const { currentPage, totalPages } = props;
    const [open, setOpen] = useState(false);
    const classes = useStyles();

    const generatePageList = () => {
        const list = []
        for (let i = 1; i <= totalPages; i++) {
            list.push(<li className={`${classes.li}`} >
                <button className={`${classes.pageBtn}`} style={{ background: `${currentPage == i ? '#e9ecef' : ''}` }}>
                    <span> {i} </span>
                </button>
            </li>)
        }
        return list;
    }

    return <div style={{ position: 'relative' }}>
        <button className={classes.pageBtn} onClick={() => { setOpen((prev) => { return !prev }) }}>
            <span > 1 </span>
        </button>
        {open && <div className={classes.listOfPage}>
            <ul style={{ listStyle: 'none' }}>
                {generatePageList()}
            </ul>
        </div>}
    </div>;
}
