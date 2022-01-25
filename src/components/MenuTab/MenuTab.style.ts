import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  wrapper: {
    width: "100%",
  },
  container: {
    padding: "0 0 50px 0",
  },
  menuRow: {
    display: "flex",
    justifyContent: "center",
  },
  menuTitle: {},
  heading: {
    fontSize: "30px",
    lineHeight: "28px",
  },
  options: {
    ["@media (max-width: 600px)"]: {
      width: "85%",
      flexWrap: "wrap",
      margin: "0 auto",
    },
  },
  option: {
    textTransform: "uppercase",
    margin: "5px",
    border: "1px solid #d3d7da",
    cursor: "pointer",
    fontSize: "14px",
    padding: "10px",
    "&:hover": {
      borderColor: "black",
    },
  },
}));

export default useStyles;
