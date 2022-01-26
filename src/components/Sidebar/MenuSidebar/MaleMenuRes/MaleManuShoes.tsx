/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { useStyles } from "./MaleMenuRes.css";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ClearIcon from "@material-ui/icons/Clear";
import { Drawer } from "@material-ui/core";
// import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

function MaleMenuShoes({
  openDrawerShoes,
  setOpenDrawerShoes,
}: {
  openDrawerShoes: any;
  setOpenDrawerShoes: any;
}) {
  const classes = useStyles();

  const handleClickBack = () => {
    setOpenDrawerShoes(false);
  };

  return (
    <Drawer open={openDrawerShoes} anchor="right">
      <div className={classes.containers1}>
        <div className={classes.header}>
          <div className={classes.header_back}>
            <span className={classes.icon} onClick={handleClickBack}>
              <ArrowBackIosIcon />
            </span>
            <strong className={classes.title}>GIÀY</strong>
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
              Tất cả giày nam
            </a>
          </span>
          <span className={classes.content_title}>
            <a href="#" className={classes.link_antiunderline}>
              Bóng đá
            </a>
          </span>
          <span className={classes.content_title}>
            <a href="#" className={classes.link_antiunderline}>
              Giày
            </a>
          </span>
          <span className={classes.content_title}>
            <a href="#" className={classes.link_antiunderline}>
              Bóng rổ
            </a>
          </span>
          <span className={classes.content_title}>
            <a href="#" className={classes.link_antiunderline}>
              Quần vợt
            </a>
          </span>
          <span className={classes.content_title}>
            <a href="#" className={classes.link_antiunderline}>
              Chạy
            </a>
          </span>
          <span className={classes.content_title}>
            <a href="#" className={classes.link_antiunderline}>
              Tập luyện
            </a>
          </span>
          <span className={classes.content_title}>
            <a href="#" className={classes.link_antiunderline}>
              Dép xăng đan
            </a>
          </span>
          <span className={classes.content_title}>
            <a href="#" className={classes.link_antiunderline}>
              Dòng sản phẩm Original
            </a>
          </span>
        </div>
      </div>
    </Drawer>
  );
}

export default MaleMenuShoes;
