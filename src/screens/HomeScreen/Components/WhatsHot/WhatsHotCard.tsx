import React from 'react';
import useStyles from './WhatsHot.styles';

export default function WhatsHotCard(props: { img: string, title: string, description: string }) {
    const classes = useStyles();
    return <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
        <div>
            <img src={props.img} alt="" style={{ height: '436px', width: '100%' }} />
        </div>
        <div className={classes.cardFooter} >
            <strong className={classes.strong}>
                {props.title}
            </strong>
            <p style={{ paddingTop: '5px' }}>
                {props.description}
            </p>
            <div style={{ marginTop: '30px', flex: 1, display: 'flex', alignItems: 'flex-end' }}>
                <a className={classes.a} href="">Mua ngay</a>
            </div>
        </div>
    </div>;
}
