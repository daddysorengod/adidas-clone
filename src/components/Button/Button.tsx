import React from "react";
import useStyles from "./Button.styles";
import ArrowForwardOutlinedIcon from "@material-ui/icons/ArrowForwardOutlined";

const Button = ({ title }: { title: any }) => {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <button className={`${classes.button}`}>
        <span>{title}</span>
        <ArrowForwardOutlinedIcon style={{ marginLeft: "15px" }} />
      </button>
    </div>
  );
};

export default Button;
