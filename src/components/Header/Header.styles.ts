import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  wrapper: {
    minHeight: "30px",
    maxHeight: "40px",
    display: "flex",
    backgroundColor: "black",
  },
  container: {
    width: "95vw",
    margin: "0 auto",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    ["@media (max-width:960px)"]: {
      display: "none",
    },
  },
  item: {
    color: "white",
    fontWeight: "bold",
    fontSize: "11px",
    lineHeight: "15px",
    letterSpacing: "2px",
    padding: "5px 10px",
    textTransform: "uppercase",
    cursor: "pointer",
    "&:hover": {
      textDecoration: "underline",
    },
  },
}));

export default useStyles;
