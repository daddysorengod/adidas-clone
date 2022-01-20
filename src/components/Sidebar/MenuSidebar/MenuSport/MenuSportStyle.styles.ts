import { makeStyles } from "@material-ui/core/styles";

export const useStyle = makeStyles({
    container : {
        display: 'flex',
        flexDirection: 'column',
        width: '100vw',
        height: '100vh',
        
    },
    header : {
        height: '60px',
        width: '100vw',
        display: 'flex',
        alignItems: 'center',
        borderBottom: '1px solid rgb(223,219,219)'
    },
    iconArrow : {
        width: '50px',
        padding: '0 10px 0 0'
    },
    iconClose : {
        width: '50px',
        padding: '0 10px 0 0'
    },
    h2Title : {
        display: 'flex',
        width: '100vw'     
    },

    item: {
        display: 'flex',
        padding: '10px',
        width: '100vw',
        height: '45px',
        textAlign: 'start',
        cursor: 'pointer',
        alignItems: 'center',
        justifyContent: 'space-between'
    }
})