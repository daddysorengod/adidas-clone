import BannerVideo from '@app/components/BannerVideo/BannerVideo';
import Navbar from '@app/components/Navbar/Navbar';
// import { Container } from '@material-ui/core';
import NewsLetterFooter from '../../components/NewsLetterFooter/NewsLetterFooter';
import React from 'react';
import Menu from './components/Menu/Menu';
import PageNumber from './components/PageNumber/PageNumber';
import Pagination from './components/Pagination/Pagination';
import RecentlyViewed from './components/RecentlyViewed/RecentlyViewed';
import useStyles from './ProductScreen.styles';
export default function ProductScreen() {
    const classes = useStyles();

    return <div>
        <Navbar />
        <div style={{ paddingTop: '110px' }}>
            <div className={classes.imageHeader} style={{ paddingBottom: '20px' }}>
                <BannerVideo
                    type="dark"
                    img="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_1920,w_1920/viVN/Images/triple-black-mini-mh-d_tcm337-784850.jpg"
                    imgAlt="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_1920,w_1920/viVN/Images/triple-black-mini-mh-d_tcm337-784850.jpg"
                    title="THE TRIPLE BLACK COLLECTION"
                    summary="Sneakers to wear with everything."
                />
            </div>
            <div className={classes.container} style={{ position: 'relative' }}>
                <Menu />
                <Pagination currentPage={1} totalPages={10} />
                <RecentlyViewed />
            </div>
            <div>
                <NewsLetterFooter />
            </div>
        </div>
    </div>;
}
