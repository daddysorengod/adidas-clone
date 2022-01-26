/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { useStyles } from "./MaleMenuRes.css";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ClearIcon from "@material-ui/icons/Clear";
import { Drawer } from "@material-ui/core";

function MaleMenuClothes({
  openDrawerClothes,
  setOpenDrawerClothes,
}: {
  openDrawerClothes: any;
  setOpenDrawerClothes: any;
}) {
  const classes = useStyles();

  const handleClickBack = () => {
    setOpenDrawerClothes(false);
  };

  return (
    <Drawer open={openDrawerClothes} anchor="right">
      <div className={classes.containers2}>
        <div className={classes.header}>
          <div className={classes.header_back}>
            <span className={classes.icon} onClick={handleClickBack}>
              <ArrowBackIosIcon />
            </span>
            <strong className={classes.title}>QUẦN ÁO</strong>
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
              Tất cả quần áo nam
            </a>
          </span>
          <span className={classes.content_title}>
            <a href="#" className={classes.link_antiunderline}>
              Áo khoác
            </a>
          </span>
          <span className={classes.content_title}>
            <a href="#" className={classes.link_antiunderline}>
              Áo hoodie & Áo sọc
            </a>
          </span>
          <span className={classes.content_title}>
            <a href="#" className={classes.link_antiunderline}>
              Áo sơ mi
            </a>
          </span>
          <span className={classes.content_title}>
            <a href="#" className={classes.link_antiunderline}>
              Áo nỉ
            </a>
          </span>
          <span className={classes.content_title}>
            <a href="#" className={classes.link_antiunderline}>
              Quần
            </a>
          </span>
          <span className={classes.content_title}>
            <a href="#" className={classes.link_antiunderline}>
              Quần bó
            </a>
          </span>
          <span className={classes.content_title}>
            <a href="#" className={classes.link_antiunderline}>
              Quần sóoc
            </a>
          </span>
          <span className={classes.content_title}>
            <a href="#" className={classes.link_antiunderline}>
              Áo Jersey
            </a>
          </span>
        </div>
      </div>
    </Drawer>
  );
}

export default MaleMenuClothes;
