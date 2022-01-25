import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
    cacto: {
        zIndex : 10,
        display: 'flex',
        flexDirection: 'column',
        position: 'absolute',
        backgroundColor: '#fff',
        borderTop : '1px solid rgb(223,219,219)'

    },
    boxCato: {
        margin :'auto'
    },
    lable : {
        display: 'flex'
    },
    boxLable : {
        padding: '10px',
        flex: '1',
        display: 'flex',
        flexDirection: 'column',
        width:'auto'
    },
    space : {
        width: '25px',
        height: '25px'
    }
    ,
    image : {
        width: '172px',
        height: 'auto',
        cursor: 'pointer',
        padding: '5px 0px'
    },
    li : {
        height: '25px',
        listStyle: 'none',
        width: 'fit-content',
        fontSize: '12px',
        cursor: 'pointer',
        '&:hover' : {
            'text-decoration': 'underline',
        }
    },
    footer: {
        display: 'flex',
        width: '100vw',
        height: '30px',
        border: '1px solid rgb(223,219,219)'
    },
    h6: {
        width: '290px',
        margin: '0 10px',
        cursor: 'pointer',
        alignSelf: 'center',
        textAlign: 'left',
        flex: '1'
    }
})

