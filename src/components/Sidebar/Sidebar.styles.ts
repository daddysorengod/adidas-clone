import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  wrapper: {
    width: "100vw",
    height: "100vh",
    position: "fixed",
    background: "white",
    zIndex: 2,
    transform: "translateX(-100%)",
    transition: "transform .4s,opacity .4s",
    transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
    transitionDelay: "180ms",
  },
  header: {
    display: "flex",
    width: "calc(100vw - 64px)",
    minHeight: "60px",
  },
  mainLogoImg: {
    position: "absolute",
    width: "60px",
    height: "55px",
    margin: "0 auto",
    left: 0,
    right: 0,
  },
  closeIcon: {
    height: "44px",
    width: "44px",
    position: "absolute",
    right: "20px",
    top: "8px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  menuItems: {
    paddingTop: "10px",
    boxShadow: "inset 0 1px 0 0 #e9ecef",
  },
  item: {
    fontSize: "18px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 30px",
    height: "45px",
  },
  arrowIcon: {
    fontSize: "18px",
  },
  primary: {
    fontWeight: "bold",
  },
  upper: {
    textTransform: "uppercase",
  },
  divider: {
    borderBottom: "1px solid #e9ecef",
    margin: "10px 0",
  },
  selector: {
    display: "flex",
    position: "absolute",
    bottom: "0",
    width: '100%',
    height: '45px'
  },
  selectorItem: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flex: "1",
    height: "100%",
  },
}));

export default useStyles;
