/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { useStyles } from "./MaleMenuRes.css";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ClearIcon from "@material-ui/icons/Clear";
import { Drawer } from "@material-ui/core";

function MaleMenuAccessory({
  openDrawerAccessory,
  setOpenDrawerAccessory,
}: {
  openDrawerAccessory: any;
  setOpenDrawerAccessory: any;
}) {
  const classes = useStyles();

  const handleClickBack = () => {
    setOpenDrawerAccessory(false);
  };

  return (
    <Drawer open={openDrawerAccessory} anchor="right">
      <div className={classes.containers3}>
        <div className={classes.header}>
          <div className={classes.header_back}>
            <span className={classes.icon} onClick={handleClickBack}>
              <ArrowBackIosIcon />
            </span>
            <strong className={classes.title}>PHỤ KIỆN</strong>
          </div>
          <div
            className={`${classes.header_quit} ${classes.icon}`}
            onClick={handleClickBack}
          >
            <ClearIcon />
          </div>
        </div>
        <div className={classes.content}>
          <span className={classes.content_title}>
            <a href="#" className={classes.link_antiunderline}>
              Tất cả phụ kiện cho nam
            </a>
          </span>
          <span className={classes.content_title}>
            <a href="#" className={classes.link_antiunderline}>
              Tất cả túi
            </a>
          </span>
          <span className={classes.content_title}>
            <a href="#" className={classes.link_antiunderline}>
              Mũ lưỡi trai & Đội đầu
            </a>
          </span>
          <span className={classes.content_title}>
            <a href="#" className={classes.link_antiunderline}>
              Tất
            </a>
          </span>
          <span className={classes.content_title}>
            <a href="#" className={classes.link_antiunderline}>
              Bóng
            </a>
          </span>
        </div>
      </div>
    </Drawer>
  );
}

export default MaleMenuAccessory;
