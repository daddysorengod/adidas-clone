import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles({
  // container: {
  //   height: "100vh",
  //   display: "flex",
  //   justifyContent: "center",
  //   alignItems: "center",
  // },

  modal_container: {
    width: "700px",
    height: "fit-content",
    backgroundColor: "white",
    padding: "20px 10px",
    border: "1px solid black",
    margin: 'auto',
  },

  modal_content: {
    margin:'20px 30px',
  },
  
  modal_box:{
    position: 'relative',
  },

  modal_ico:{
    position:'absolute',
    zIndex:300
  },

  modal_content_ele: {
    marginBottom: "15px",
  },

  modal_content_eleSpecial:{
    textDecoration: 'underline',
    cursor: 'pointer',

    '&:hover':{
      backgroundColor: 'black',
      color: 'white'
    }
  }
});
