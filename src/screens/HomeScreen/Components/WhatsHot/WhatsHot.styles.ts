import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
    h4: {
        fontSize: '30px',
        fontWeight: 'bold',
        letterSpacing: '1.5px',
        textTransform: 'uppercase',
        paddingBottom: '20px'
    },
    a: {
        textTransform: 'uppercase',
        textOverflow: 'ellipsis',
        fontSize: '13px !important',
        textDecoration: 'underline',
        fontWeight: 'bold',
        letterSpacing: '2px'
    },
    strong: {
        textTransform: 'uppercase',
    },
    cardFooter: {
        height: '100%',
        marginTop: '10px',
        display: 'flex',
        flex: 1,
        flexDirection: 'column'
    }
}))

export default useStyles