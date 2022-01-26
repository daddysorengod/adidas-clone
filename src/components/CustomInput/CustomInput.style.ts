import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  wrapper: {
    position: 'relative',
    ["@media (max-width:960px)"]: {
      display: 'none'
    }
  },
  container: {
    height: "48px",
    width: "15vw",
    minWidth: "140px",
    maxWidth: "300px",
    padding: "8px 0 8px 30px",
    position: "absolute",
    right: 0,
  },
  input: {
    height: "32px",
    width: '100%',
    backgroundColor: "#e9ecef",
    textOverflow: "ellipsis",
    paddingLeft: '10px',
    paddingRight: '35px',
    fontSize: '13px',
    outline: 'none',
    border: 'unset',
    transition: 'all 1s ease-in-out',
    "&:focus": {
      border: "solid thin #767677",
    }
  },
  searchIcon: {
    position: 'absolute',
    top: '11px',
    left: 'inherit',
    right: '5px',
    cursor: 'pointer'
  }
}));

export default useStyles;
