import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  headerContainer: {
    position: "fixed",
    background: "white",
    zIndex: 2,
    width: "100vw",
    transition: "transform .4s,opacity .4s",
    transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
    transform: 'translate(0)'
  },
  wrapperTop: {
    padding: "0 40px",
    color: "black",
    ["@media (max-width:960px)"]: {
      display: "none",
    },
  },
  containerTop: {
    display: "flex",
    justifyContent: "flex-end",
    height: "32px",
    width: "100%",
    margin: "0 auto",
  },
  itemTop: {
    padding: "0 10px",
    height: "100%",
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
    fontSize: "13px",
    color: "black",
  },
  menuLang: {
    width: "20px",
    height: "100%",
  },
  wrapperBot: {
    height: "48px",
    borderBottom: "1px solid #e9ecef",
    // [theme.breakpoints.down("md")]: {
    //   height: "60px",
    // },
    ["@media (max-width:960px)"]: {
      height: "60px",
    },
  },
  containerBot: {
    padding: "0 40px",
    display: "flex",
    justifyContent: "space-between",
    height: "100%",
    // [theme.breakpoints.down("md")]: {
    //   alignItems: "center",
    //   padding: "0 10px",
    // },
    ["@media (max-width:960px)"]: {
      alignItems: "center",
      padding: "0 10px",
    },
  },
  menu: {
    height: "100%",
    display: "flex",
    flex: "0 0 auto",
    alignItems: "center",
    textTransform: "uppercase",
    // [theme.breakpoints.down("lg")]: {
    //   flex: "1",
    //   paddingLeft: "40px",
    // },
    ["@media (max-width:1280px)"]: {
      flex: "1",
      paddingLeft: "40px",
    },
    // [theme.breakpoints.down("md")]: {
    //   display: "none",
    // },
    ["@media (max-width:960px)"]: {
      display: "none",
    },
  },
  itemContainer: {
    marginTop: "3px",
    width: "max-content",
    height: "45px",
    marginRight: "20px",
    cursor: "pointer",
    "&:hover": {
      borderBottom: "3px solid black",
    },
  },
  item: {
    fontSize: "14px",
    lineHeight: "45px",
    letterSpacing: "1.87px",
  },
  selected: {
    borderBottom: "3px solid black",
  },
  hamburgerIcon: {
    cursor: "pointer",
    display: "none",
    // [theme.breakpoints.down("md")]: {
    //   display: "flex",
    //   flex: "1",
    // },
    ["@media (max-width:960px)"]: {
      display: "flex",
      flex: "1",
    },
  },
  hamburgerContainer: {
    width: "48px",
    display: "flex",
    justifyContent: "center",
  },
  mainLogoContainer: {
    display: "flex",
    height: "100%",
  },
  mainLogo: {
    position: "relative",
    top: "-15px",
    // [theme.breakpoints.down("md")]: {
    //   position: "unset",
    //   top: "unset",
    // },
    ["@media (max-width:960px)"]: {
      position: "unset",
      top: "unset",
    },
  },
  mainLogoImg: {
    width: "70px",
    height: "100%",
    // [theme.breakpoints.down("md")]: {
    //   width: "55px",
    // },
    ["@media (max-width:960px)"]: {
      width: "55px",
    },
  },
  rightIcon: {
    width: "48px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  favoriteIcon: {
    // [theme.breakpoints.down("md")]: {
    //   display: "none",
    // },
    ["@media (max-width:960px)"]: {
      display: "none",
    },
  },
  searchIcon: {
    display: "none",
    // [theme.breakpoints.down("md")]: {
    //   display: "flex",
    // },
    ["@media (max-width:960px)"]: {
      display: "flex",
    },
  },
  menuRight: {
    // [theme.breakpoints.down("md")]: {
    //   flex: "1",
    //   justifyContent: "flex-end",
    // },
    ["@media (max-width:960px)"]: {
      flex: "1",
      justifyContent: "flex-end",
    },
  },
}));

export default useStyles;
