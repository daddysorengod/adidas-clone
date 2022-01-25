import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
    innerCard: {
        border: '1px solid transparent',
        position: 'relative',
        width: '100%'
    },
    innerCardActive: {
        position: 'absolute',
        border: '1px solid black ',
        zIndex: 10,
        [theme.breakpoints.down('md')]: {
            border: '1px solid transparent !important',
        },
    },
    cardAsset: {
        backgroundColor: '#e9ecef',
        position: 'relative'
    },
    wishListBtn: {
        border: 'none',
        position: 'absolute',
        right: '15px',
        padding: '16px 0 16px 0',
        cursor: 'pointer'
    },
    productPrice: {
        position: 'absolute',
        bottom: '-5px',
        left: '5px',
        marginTop: '5px',
        backgroundColor: '#fff',
        padding: '2px 5px 2px 5px',
        fontSize: '14px',
        lineHeight: '20px',
        transition: 'all 0.1s ease-in-out 0s',
    },
    assetImage: {
        width: '100%',
        objectPosition: '50% -30px'
    },
    productCarousel: {
        [theme.breakpoints.down('md')]: {
            display: 'none !important'
        },
    },
    cardDetail: {
        minHeight: '90px',
        padding: '10px 10px 20px 10px',
        backgroundColor: 'white'

    },
    productTitle: {
        fontSize: '14px',
    },
    productCategory: {
        color: '#767677',
        flex: `1 1 auto`,
        fontSize: '12px',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
    },
    productLabel: {
        fontSize: '14px',
    },
    productColorCount: {
        color: '#767677'
    },
    productParagraph: {
        lineHeight: '20px'
    }
}))

export default useStyles;