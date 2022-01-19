import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  bannerWrapper: {
    position: "relative",
    width: "100%",
  },
  bannerContainer: {},
  contentWrapper: {
    width: "1280px",
    height: "auto",
    maxWidth: "100%",

    display: "flex",
    justifyContent: "flex-start",

    paddingTop: "40px",
    paddingBottom: "60px",
    padding: "20px 15px",

    position: "absolute",
    top: "0",
    right: "0",
    bottom: "0",
    left: "0",

    margin: "0 auto",

    ["@media (max-width:960px)"]: {
      padding: "20px 15px",
    },
  },
  videoContainer: {
    width: "100%",
    // objectFit: 'cover',
    maxHeight: "100vh",
    ["@media (max-width:960px)"]: {
      objectFit: "cover",
    },
  },
  contentContainer: {
    display: "flex",
    flexDirection: "column",
    color: "white",
    justifyContent: "center",
    width: "33.3333333333%",
    ["@media (max-width:960px)"]: {
      justifyContent: "flex-end",
      width: "50%",
    },
    ["@media (max-width:600px)"]: {
      width: "100%",
    },
  },
  summaryContainer: {
    fontSize: "18px",
    lineHeight: "24px",
    color: (props: any) => (props.type === "light" ? "white" : "black"),
  },
  title: {
    fontSize: "42px",
    lineHeight: "38px",
    marginBottom: "10px",
    textTransform: "uppercase",
    ["@media (max-width:960px)"]: {
      fontSize: "36px",
      lineHeight: "32px",
    },
  },
  summary: {
    fontSize: "inherit",
    lineHeight: "inherit",
  },
}));

export default useStyles;
