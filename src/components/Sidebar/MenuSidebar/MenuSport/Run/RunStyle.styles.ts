import { makeStyles } from "@material-ui/core/styles";

export const useStyle = makeStyles({
  container: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    height: "100vh",
    backgroundColor: "#fff",
  },
  drawer: {
    width: "100%",
  },
  header: {
    height: "60px",
    display: "flex",
    alignItems: "center",
    borderBottom: "1px solid rgb(223,219,219)",
  },
  iconArrow: {
    width: "50px",
    padding: "10px",
  },
  iconClose: {
    width: "50px",
    padding: "0 10px 0 0",
  },
  h2Title: {
    display: "flex",
    width: "100%",
  },

  item: {
    display: "flex",
    padding: "10px",
    height: "45px",
    textAlign: "start",
    cursor: "pointer",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
