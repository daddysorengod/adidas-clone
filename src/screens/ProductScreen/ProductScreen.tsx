import BannerVideo from '@app/components/BannerVideo/BannerVideo';
import Navbar from '@app/components/Navbar/Navbar';
import { Container } from '@material-ui/core';
import React from 'react';
import Menu from './components/Menu/Menu';
import useStyles from './ProductScreen.styles';
export default function ProductScreen() {
    const classes = useStyles();

    return <div>
        <Navbar />
        <div style={{ paddingTop: '110px' }}>
            <div style={{ paddingBottom: '20px' }}>
                <BannerVideo
                    type="dark"
                    img="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_1920,w_1920/viVN/Images/triple-black-mini-mh-d_tcm337-784850.jpg"
                    imgAlt="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_1920,w_1920/viVN/Images/triple-black-mini-mh-d_tcm337-784850.jpg"
                    title="THE TRIPLE BLACK COLLECTION"
                    summary="Sneakers to wear with everything."
                />
            </div>
            <div className={classes.container}>
                <div>
                    <Menu />
                </div>
            </div>
        </div>
    </div>;
}
