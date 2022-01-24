import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
    interested: {
        marginTop: '80px',
        position:'relative',
        [theme.breakpoints.down('sm')]: {
            marginTop: '40px',
        },
    },
    h2: {
        fontSize: '28px',
        marginLeft: 0,
        textTransform: 'uppercase',
        fontWeight: 'normal',
        [theme.breakpoints.down('md')]: {
            fontSize: '32px'
        },
        marginBottom: '15px'
    },
    a: {
        margin: '0 28px 0 0',
        fontSize: '14px',
        letterSpacing: '0',
        padding: '0 2px 0 0',
        textDecoration: 'underline',
        borderRight: '2px solid transparent',
        textTransform: 'uppercase',
        
    },
    carousel: {
        padding: '20px 0 0 0'
    }
}))

export default useStyles