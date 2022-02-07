import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  footer: {
    "& .footer-main": {
      fontFamily: "Noto Sans",
      width: "900px",
      display: "flex",
      justifyContent: "space-between",
      margin: "auto",
      marginTop: '60px',
      textAlign: "left",
      lineHeight: "1.7",
      [theme.breakpoints.down("sm")]: {
        display: "none",
      },
      "& h3": {
        marginBottom: "30px",
      },
      "& li": {
        listStyle: "none",
        fontSize: "14px",
        cursor: "pointer",
      },
      "& li:hover a": {
        textDecoration: "underline",
      },
      "& li a": {
        color: "black",
        textDecoration: "none",
      },
    },
    "& .footer-900px": {
      display: "none",
      margin: "auto",
      backgroundColor: "black",
      width: "100vw",

      [theme.breakpoints.down("sm")]: {
        display: "flex",
      },
      justifyContent: "space-around",
      "& li": {
        listStyle: "none",
        margin: "15px 0",
      },
      "& li a": {
        textDecoration: "none",
        color: "white",
        "&:hover": {
          textDecoration: "underline",
        },
      },
    },
    "& .sub-footer": {
      marginTop: "120px",
      backgroundColor: "#363738",
      color: "#888889",
      height: "50px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      [theme.breakpoints.down("sm")]: {
        justifyContent: "space-between",
        alignItems: "center",
        height: "100%",
        marginTop: "0",
      },
      [theme.breakpoints.down("xs")]: {
        flexWrap: "wrap",
      },
      "& .sub-footer__left": {
        [theme.breakpoints.down("xs")]: {
          width: "50vw",
        },
      },
      "& .sub-footer__center": {
        margin: "10px 0",
        [theme.breakpoints.down("xs")]: {
          width: "50vw",
        },
      },

      "& .sub-footer__img": {
        width: "20px",
        height: "10px",
      },

      "& .sub-footer__text": {
        fontSize: "13px",
        [theme.breakpoints.down("sm")]: {
          display: "none",
        },
      },

      "& .sub-footer__text900px": {
        display: "none",
        [theme.breakpoints.down("xs")]: {
          width: "100vw",
        },
        "& li": {
          listStyle: "none",
          textAlign: "end",
          marginRight: "15px",
          margin: "15px 0",
          [theme.breakpoints.down("xs")]: {
            textAlign: "center",
          },
        },

        "& li a": {
          textDecoration: "none",
          display: "block",
          "& :hover": {
            textDecoration: "underline",
          },
        },

        [theme.breakpoints.down("sm")]: {
          display: "flex",
          flexDirection: "column",
        },
      },
    },
  },
}));

export {useStyles};
