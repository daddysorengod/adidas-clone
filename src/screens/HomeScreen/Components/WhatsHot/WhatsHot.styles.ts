import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
    container: {
        width: '100%',
        margin: 'auto',
        ["@media (min-width:1280px)"]: {
            maxWidth: '1280px'
        },
        ["@media (max-width:600px)"]: {
            maxWidth: '600px'
        },
    },
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