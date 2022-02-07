import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({

    container: {
        marginLeft: 'auto',
        marginRight: 'auto',
        maxWidth: '100%',
        position: 'relative',
        ['@media (min-width: 1200px)']: {
            width: '1200px',
        },
        ['@media (min-width: 960px)']: {
            paddingLeft: '15px',
            paddingRight: ' 15px'
        },
        ['@media (min-width: 1600px)']: {
            width: '1600px',
        },
    },
    title: {
        marginTop: '15px',
        marginBottom: '10px',
        padding: '0 15px'
    },
    pagination: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: '60px',
        marginBottom: '40px',
        padding: '0 30px'
    },
    pageNumber: {
        display: 'flex',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    pagePrev: {
        textDecoration: 'underline',
        textTransform: 'uppercase',
        fontSize: '13px',
        fontWeight: 700,
        letterSpacing: '2px'
    },
    pageNext: {
        textDecoration: 'underline',
        textTransform: 'uppercase',
        fontSize: '13px',
        fontWeight: 700,
        letterSpacing: '2px'
    },
    pageBtn: {
        position: 'relative',
        border: '1px solid #e9ecef',
        background: '#ffffff',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '14px',
        fontWeight: 700,
        fontFamily: 'Noto Sans',
        padding: '15px 30px 15px 20px',
        cursor: 'pointer',
        "&:hover": {
            background: '#e9ecef !important'
        }
    },
    listOfPage: {
        position: 'absolute',
        left: 0,
        top: '100%',
        maxHeight: '195px',
        overflowY: 'auto',
        overflowX: 'hidden',
        width: '100%'
    },
    li: {
        borderBottom: '1px solid #767677',
    }
}))

export default useStyles;