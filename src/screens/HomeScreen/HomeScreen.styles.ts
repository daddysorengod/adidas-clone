import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  container: {
    paddingTop: '110px',
    ['@media (max-width: 960px)']: {
      paddingTop: '90px'
    }
  }
}))

export default useStyles;