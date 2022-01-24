import React from "react";
import useStyles from "./CTAButton.style";
import ArrowForwardOutlinedIcon from "@material-ui/icons/ArrowForwardOutlined";

function CTA({
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
        <ArrowForwardOutlinedIcon style={{ marginLeft: "15px" }} />
      </button>
    </div>
  );
}

export default CTA;
