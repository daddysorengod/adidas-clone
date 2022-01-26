import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  // * common class
  menu_title: {
    fontWeight: 600,
    fontSize: '16px',
    marginBottom: '10px'
  },

  space5: {
    margin: "5px 0 !important",
  },

  link: {
    textDecoration: "none",
    color: "black",
    "&:hover": {
      textDecoration: "underline",
    },
  },

  link_antiunderline: {
    textDecoration: "none",
    color: "black",
  },

  //? container
  menu_container: {
    boxSizing: "border-box",
    fontFamily: "Noto Sans",
    fontSize: "12px",
    backgroundColor: 'white',

    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },

  //? menu-body
  menu_body: {
    display: "flex",
    borderTop: "1px solid #E4E4E4",
    borderBottom: "1px solid #E4E4E4",
    padding: "30px 120px",

    [theme.breakpoints.down("lg")]: {
      padding: "30px 80px",
    },
    [theme.breakpoints.down("md")]: {
      padding: "30px 0px",
    },
  },

  //? menu-special
  menu_special: {
    width: "33%",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start !important",
    marginLeft: "80px",
    paddingRight: "20px",
    textAlign: "left",

    [theme.breakpoints.up("lg")]: {
      marginLeft: "150px",
      width: "200px",
    },
  },

  //? menu-main
  menu_main: {
    width: "67%",
    borderLeft: "1px solid #E4E4E4",
    display: "flex",
    justifyContent: "space-between",
    padding: "0 50px 0 20px",

    [theme.breakpoints.down("md")]: {
      borderLeft: "none",
    },
  },

  //* children f1
  menu_main_items: {
    minWidth: "140px",
    maxWidth: "140px",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start !important",
    flexWrap: "wrap", //!important
    textAlign: "left",
    marginRight: "15px",
  },

  //? menu-footer
  menu_footer: {
    display: "flex",
    padding: "10px 120px",

    [theme.breakpoints.down("lg")]: {
      padding: "10px 80px",
    },
    [theme.breakpoints.down("md")]: {
      padding: "10px 0px",
    },
  },

  //* children f1
  menu_footer_first: {
    width: "33%",
    display: "flex",
    textAlign: "left",
    alignItems: "flex-start !important",
    marginLeft: "80px",
    paddingRight: "20px",

    [theme.breakpoints.up("lg")]: {
      marginLeft: "150px",
      width: "200px",
    },
  },

  menu_footer_second: {
    width: "67%",
    display: "flex",
    justifyContent: "space-between",
    padding: "0 50px 0 20px",
  },

  //* children f2
  menu_footer_second_block: {
    minWidth: "140px",
    maxWidth: "140px",
    display: "flex",
    justifyContent: "flex-start !important",
    flexWrap: "wrap",  //!important
    textAlign: "left",
    marginRight: "15px",
  },
}));