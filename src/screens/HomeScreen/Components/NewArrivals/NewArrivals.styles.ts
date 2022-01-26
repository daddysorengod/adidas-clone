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
}))

export default useStyles;