import React, { useState } from 'react';
import useStyles from '../../ProductScreen.styles';
export default function PageNumber() {
    const [open, setOpen] = useState(false);
    const classes = useStyles();
    return <div style={{ position: 'relative' }}>
        <button className={classes.pageBtn} onClick={() => { setOpen((prev) => { return !prev }) }}>
            <span > 1 </span>
        </button>
        {open && <div className={classes.listOfPage}>
            <ul style={{ listStyle: 'none' }}>
                <li className={classes.li}>
                    <button className={classes.pageBtn}>
                        <span> 1 </span>
                    </button>
                </li>
                <li className={classes.li}>
                    <button className={classes.pageBtn}>
                        <span> 2 </span>
                    </button>
                </li>
                <li className={classes.li}>
                    <button className={classes.pageBtn}>
                        <span> 3 </span>
                    </button>
                </li>
                <li className={classes.li}>
                    <button className={classes.pageBtn}>
                        <span> 4 </span>
                    </button>
                </li>
            </ul>
        </div>}
    </div>;
}
