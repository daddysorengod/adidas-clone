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
    }
}))

export default useStyles;