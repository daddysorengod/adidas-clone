import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({

  container: {
    padding: '20px'
  },
  content: {
    paddingRight: '200px'
  },
  h1: {
    fontSize: '30px',
    fontWeight: 600,
    lineHeight: '28px',
    marginBottom: '30px'
  },
  eachForm: {
    marginTop: '15px',
    '& .MuiFormControlLabel-label': {
      fontSize: '16px',
      fontWeight: '400',
      lineHeight: '24px',
      fontFamily: 'Noto Sans,Helvetica,Arial'
    },
    '& .MuiIconButton-label': {
      color: 'black',
    },
    '& .MuiSvgIcon-root': {
      fontSize: 30,
      color: 'black',
    },
  },
  checkbox: {

  },
  radius: {
  },
  error: {
    color: '#e32b2b',
    fontSize: '14px',
    marginTop: '5px'
  },
  closeBtn: {
    background: 'white',
    border: '1px solid black',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    right: '10px',
    top: '10px',
    height: '50px',
    width: '50px'
  }
}));

export default useStyles;
