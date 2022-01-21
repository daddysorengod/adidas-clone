import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  wrapper: {
    width: "100%",
    position: "relative",
    marginTop: "80px",
  },
  header: {},
  container: {
    width: "100%",
    margin: "auto",
    padding: "0 15px",

    ["@media (min-width:1280px)"]: {
      width: "1280px",
    },

    // ["@media (max-width:600px)"]: {
    //   display: 'flex',
    //   flexDirection: 'column'
    // },
  },
  heading: {
    fontSize: "30px",
    lineHeight: "28px",
    letterSpacing: "1.5px",
    marginBottom: "15px",
  },
  categories: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    width: "100%",
    gap: "0 15px",
    ['@media (max-width: 960px)']: {
      gridTemplateColumns: "1fr",
      gap: '15px 0'
    }
  },
  imageContainer: {
    position: "relative",
    cursor: 'pointer',
  },
  title: {
    position: "absolute",
    color: "white",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    zIndex: 2
  },
  image: {
    display: 'flex',
    width: "100%",
    filter: "brightness(0.85)",
    height: '100%',
    objectFit: 'cover'
  },
  filter: {},
}));

export default useStyles;
