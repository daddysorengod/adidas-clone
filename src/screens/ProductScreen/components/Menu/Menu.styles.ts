import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    ul: {
        display: 'flex',
        alignItems: 'center',
        padding: '5px 0',
        color: '#000',
        listStyle: 'none',
        fontFamily: 'Noto Sans',
    },
    button: {
        border: 'none',
        marginRight: '15px',
        backgroundColor: 'transparent',
        fontWeight: 'bold',
        fontSize: '13px',
        letterSpacing: '2px',
    },
    a: {
        fontSize: '14px',
        textDecoration: 'underline',
    },
    title: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: '30px',
        [theme.breakpoints.down('sm')]: {
            fontSize: '26px',
            marginTop: '0px',

        }
    },
    h1: {
        fontWeight: 'normal',
        fontSize: '42px',
        [theme.breakpoints.down('sm')]: {
            fontSize: '26px',
        }
    },
    totalOfProduct: {
        fontSize: '12px',
        color: '#767677',
        marginLeft: '5px',
        display: 'flex',
        alignItems: 'flex-end',
        marginBottom: '10px'
    },
    currentFilter: {
        padding: '12px 0',
        [theme.breakpoints.down('sm')]: {
            display: 'none !important'
        }
    },
    fixed: {
        position: 'fixed',
        left: 0,
        top: 0,
        width: '100%',
        zIndex: 9999,
        display: 'flex',
        justifyContent: 'center',
        transition: "all 0.4s ease-in-out",
        transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
        transitionDelay: '180ms',
        [theme.breakpoints.down('sm')]: {
            display: 'none !important'
        }
    },
    innerFixed: {
        padding: '5px 10px !important',
        background: 'white',
        width: '98% !important',
        border: '1px solid black !important',
        maxWidth: '1600px',
        [theme.breakpoints.down('sm')]: {
            display: 'none !important'
        },
        // [theme.breakpoints.up('sm')]: {
        //     display: 'none !important'
        // }
    },
    horizontalBar: {
        [theme.breakpoints.down('sm')]: {
            display: 'none !important'
        },
    },
    horizontalBarInner: {
        width: '100%',
        marginTop: '10px',
        padding: '5px 0',
        borderTop: '1px solid #e9ecef',
        borderBottom: '1px solid #e9ecef',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',

        // [theme.breakpoints.up('sm')]: {
        //     display: 'none !important'
        // }
    },
    horizontalBarItem: {
        height: '40px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '0 18px 0 10px',
        fontSize: '13px',
        lineHeight: '17px',
        textTransform: 'uppercase',
        letterSpacing: '2px',
        border: '1px solid transparent',
        '&:hover': {
            border: '1px solid black !important'
        },
        cursor: 'pointer'
    },
    filter: {
        display: 'inline-block',
        height: '24px',
        margin: '0 6px 10px 4px',
        padding: '2px 10px 2px 10px',
        fontSize: '14px',
        backgroundColor: '#f5f6f6',
        border: '1px solid #e9ecef'
    },
    clearAllBtn: {
        fontSize: '14px',
        textDecoration: 'underline',
        margin: '0 5px',
        '&:hover': {
            backgroundColor: 'black',
            color: 'white'
        },
    },
    breadcrumbs: {
        [theme.breakpoints.down('sm')]: {
            display: 'none !important'
        }
    }
}))

export default useStyles