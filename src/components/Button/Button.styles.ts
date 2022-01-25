import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  wrapper: {
    display: "flex",
    marginTop: '15px',
    flex: '1',
    alignItems: 'flex-end'
  },
  button: {
    background: 'white',
    border: '1px solid black',
    height: "50px",
    outline: "none",
    display: "flex",
    alignItems: "center",
    fontSize: "13px",
    letterSpacing: "2px",
    padding: "0 15px",
    position: "relative",
    cursor: "pointer",
    fontWeight: "bold",
    textTransform: "uppercase",
    transition: "all 0.3s ease-in-out",
    "&:hover": {
      color: "#767677",
      transition: "all 0.3s ease-in-out",
    },
  }
}));

export default useStyles;
