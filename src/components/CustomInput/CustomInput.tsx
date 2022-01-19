import React from "react";
import useStyles from "./CustomInput.style";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";

function CustomInput() {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <div className={classes.container}>
        <input className={classes.input} placeholder="tìm kiếm" />
        <div>
          <SearchOutlinedIcon className={classes.searchIcon} />
        </div>
      </div>
    </div>
  );
}

export default CustomInput;
