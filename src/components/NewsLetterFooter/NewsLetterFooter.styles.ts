import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
    wrapper: {
        width: "100%",
        position: "relative",
        marginTop: "80px",
        color: 'black',
        background: '#ede734'
    },
    container: {
        maxWidth: '960px',
        width: "100%",
        margin: "auto",
        padding: "40px 20px",

        ["@media (min-width:1280px)"]: {
            width: "1280px",
        },

        // ["@media (max-width:600px)"]: {
        //   display: 'flex',
        //   flexDirection: 'column'
        // },
    },
    content: {
        display: 'flex',
        ["@media (max-width:960px)"]: {
            flexDirection: 'column'
        },
    },
    titleNews: {
        letterSpacing: '1.5px',
        fontSize: '30px',
        lineHeight: '28px',
        width: '45.8333333333%',
        ["@media (max-width:960px)"]: {
            fontSize: '26px',
            lineHeight: '24px',
            width: '100%',
        },
    },
    button: {
        flex: '1',
        marginLeft: '4.1666666667%',
        ["@media (max-width:960px)"]: {
            marginLeft: 'unset',
            marginTop: '15px'
        },
    }
}));

export default useStyles;