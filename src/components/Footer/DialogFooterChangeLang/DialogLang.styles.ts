import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  dialogLang: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "& .dialogLang__text": {
      marginLeft: "10px",
    },
    "& .dialogLang--flex": {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      backgroundColor: "#e9ecef",
    },
    "& .dialogLang__button": {
      backgroundColor: "transparent",
      border: "none",
      cursor: " pointer",
      margin: "0 10px",
    },
    "& .dialogLang__modalSelect": {
      position: "fixed",
      bottom: "0",
      left: "0",
      width: "100%",
      textAlign: "left",
      "& .dialog__Lang__overlay": {
        width: "100vw",
        height: "100vh",
        backgroundColor: "rgba(100,100,100,.5)",
      },
      "& .dialogLang__btnClose": {
        backgroundColor: "transparent",
        border: "none",
        cursor: "pointer",
        marginRight: "10px",
      },
      "& .dialogLang__modalSelect__text": {
        backgroundColor: "#e9ecef",
        padding: "15px 0 15px 10px",
        color: "black",
      },
      "& .dialogLang__modalSelect__language": {
        color: "black",
        padding: "15px 0",
        display: "flex",
        alignItems: "center",
        backgroundColor: "white",
        cursor: "pointer",
        "& .dialogLang__modalSelect__checkIcon": {
          width: "50px",
        },
      },
    },
  },
});

export { useStyles };
