import { makeStyles } from "@material-ui/core/styles";

export const useStyle = makeStyles({
  container: {
      zIndex: 10,
    display: "flex",
    flexDirection: "column",
    width: '100vw',
    height: 'auto',
    position: 'absolute',
    backgroundColor : '#fff',
    borderTop : '1px solid rgb(223,219,219)'
  },

  menuSport: {
    width: "100vw",
    display: "flex",
    height: "auto",
    padding: "10px",
  },
  centerContainer: {
    margin: "auto",
    display: "flex",
  },
  menuSportItembox: {
    width: "252px",
  },
  li: {
    listStyle: "none",
    textAlign: "start",
    height: "25px",
    width: "fit-content",
    cursor: "pointer",
    fontSize: '12px',
    "&:hover": {
      "text-decoration": "underline",
    },
  },
  img: {
    height: "auto",
    width: "172px",
    cursor: "pointer",
    padding: "5px 0px",
    display: "block",
  },
  h4: {
    textAlign: "start",
    cursor: "pointer",
    "&:hover": {
      "text-decoration": "underline",
    },
  },
  footer: {
    display: "flex",
    width: "100vw",
    height: "30px",
    border: "1px solid rgb(223, 219, 219)",
  },
  footerLink: {
    margin: "auto",
    display: "flex",
    height: "30px",
    width: "252"
  },
  h6: {
    width: "252px",
    cursor: "pointer",
    alignSelf: "center",
    textAlign: "left",
    flex: "1",
  },
});
