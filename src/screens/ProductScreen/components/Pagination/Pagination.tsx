import React from 'react';
import useStyles from '../../ProductScreen.styles'
import PageNumber from '../PageNumber/PageNumber';

interface PaginationProps {
    currentPage: number,
    totalPages: number
}

export default function Pagination(props: PaginationProps) {
    const { currentPage, totalPages } = props;
    const classes = useStyles();

    return <div className={classes.pagination}>
        <div className={classes.pagePrev}>
            <a href="#">Prev</a>
        </div>
        <div className={classes.pageNumber}>
            <span style={{ marginRight: '10px' }}>Page</span>
            <PageNumber currentPage={currentPage} totalPages={totalPages} />
            <span style={{ marginLeft: '10px' }}>of {totalPages}</span>
        </div>
        <div className={classes.pageNext}>
            <a href="#">Next</a>
        </div>
    </div>;
}
