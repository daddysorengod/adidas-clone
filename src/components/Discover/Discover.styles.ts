import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  wrapper: {
    width: '100%'
  },
  container: {
    width: '100%',
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    margin: 'auto',
    gap: '20px',
    padding: '25px 15px 15px 15px',

    ["@media (min-width:1280px)"]: {
      width: '1280px'
    },

    ["@media (max-width:600px)"]: {
      display: 'flex',
      flexDirection: 'column'
    },
  },
  itemContainer: {
    display: 'contents',
  },
  itemMedia: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    ["@media (max-width:960px)"]: {
      height: '480px'
    },
  },
  itemContent: {
    gridRowStart: '2',
    margin: '15px 15px 15px 0',
    display: 'flex',
    flexDirection: 'column',
    ["@media (max-width:960px)"]: {
      margin: 'unset'
    },
  },
  summary: {
    paddingTop: '5px'
  }
}))

export default useStyles;