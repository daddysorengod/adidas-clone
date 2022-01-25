import React from 'react';
import useStyles from './WhatsHot.styles';

export default function WhatsHotCard(props: { img?: string, video?: string, title: string, description: any }) {
    const classes = useStyles();
    return <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
        <div>
            {props.img && <img
                src={props.img}
                alt=""
                style={{ height: '436px', width: '100%', objectFit: 'cover' }}
            />}
            {props.video && <video
                src={props.video}
                loop
                autoPlay
                muted 
                playsInline
                style={{ height: '436px', width: '100%', objectFit: 'cover' }}
            ></video>}
        </div>
        <div className={classes.cardFooter} >
            <strong className={classes.strong}>
                {props.title}
            </strong>
            {props.description && props.description.map((e) => {
                return <p style={{ paddingTop: '5px' }}>
                    {e}
                </p>
            })}
            <div style={{ marginTop: '30px', flex: 1, display: 'flex', alignItems: 'flex-end' }}>
                <a className={classes.a} href="">Mua ngay</a>
            </div>
        </div>
    </div>;
}
