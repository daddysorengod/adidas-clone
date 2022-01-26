import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  /* //*Common class */
  link_antiunderline: {
    textDecoration: "none",
    color: "black",
  },

  container: {
    fontSize: "18px",
    marginBottom:'20px',
    width:'100vw',
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },

  title:{

  },

  firstScreen:{

  },

  containers1: {
    fontSize: "18px",
    width:'100vw',
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },

  containers2: {
    fontSize: "18px",
    width:'100vw',
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },

  containers3: {
    fontSize: "18px",
    width:'100vw',
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },

  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    height: "60px",
    borderBottom: "1px solid #E4E4E4",
  },

  header_back: {
    display: "flex",
  },

  header_quit: {
    position: "fixed",
    right: "10px",
  },

  icon: {
    width: "24px",
    height: "24px",
    margin: "0 5px 0 20px !important",
  },

  icon_fixed: {
    position: "fixed",
    right: "10px",
  },

  content: {
    display: "flex",
    flexDirection: "column",
    alignItems: " flex-start",
    cursor: "pointer",
  },

  content_title: {
    width: "90%",
    textAlign: "left",
    margin: " 20px 20px 0 50px",
    display: "flex",
    justifyContent: "space-between",
  },

  // content_title_higher: {},

  /* //? setStyle */
  displayNone: {
    display: 'none !important'
  },
  displayBlock: {
    display: 'block !important'
  }
}));
