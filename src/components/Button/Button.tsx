import React from "react";
import useStyles from "./Button.style";
import ArrowForwardOutlinedIcon from "@material-ui/icons/ArrowForwardOutlined";

function Button({
  margin,
  type,
  title,
}: {
  margin: any;
  type: any;
  title: any;
}) {
  const classes = useStyles(margin);
  let buttonType = null;
  {
    type === "light"
      ? (buttonType = `${classes.buttonLight}`)
      : (buttonType = `${classes.buttonDark}`);
  }
  return (
    <div className={classes.wrapper}>
      <button className={`${classes.button} ${buttonType}`}>
        <span>{title}</span>
        <ArrowForwardOutlinedIcon sx={{ marginLeft: "15px" }} />
      </button>
    </div>
  );
}

export default Button;
