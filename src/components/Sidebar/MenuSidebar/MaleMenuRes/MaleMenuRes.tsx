/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import ClearIcon from "@material-ui/icons/Clear";
import React, { useState } from "react";
import MaleMenuAccessory from "./MaleMenuAccessory";
import MaleMenuClothes from "./MaleMenuClothes";
import MaleMenuShoes from "./MaleManuShoes";
import { useStyles } from "./MaleMenuRes.css";
import { Drawer } from "@material-ui/core";

function MaleMenuRes({ open, setOpen }: { open: any; setOpen: any }) {
  const classes = useStyles();

  //Local state
  const [openDrawerShoes, setOpenDrawerShoes] = useState(false);
  const [openDrawerClothes, setOpenDrawerClothes] = useState(false);
  const [openDrawerAccessory, setOpenDrawerAccessory] = useState(false);

  const handleClickShoes = () => {
    setOpenDrawerShoes(true);
  };

  const handleClickClothes = () => {
    setOpenDrawerClothes(true);
  };

  const handleClickAccessory = () => {
    setOpenDrawerAccessory(true);
  };

  return (
    <Drawer open={open} anchor="right">
      <div className={classes.container}>
        {/* //? First screen */}
        <div className={classes.firstScreen}>
          <div className={classes.header}>
            <div className={classes.header_back}>
              <span
                className={classes.icon}
                onClick={() => {
                  setOpen(false);
                }}
              >
                <ArrowBackIosIcon />
              </span>
              <strong className={classes.title}>NAM</strong>
            </div>
            <div
              className={`${classes.header_quit} ${classes.icon}`}
              onClick={() => {
                setOpen(false);
              }}
            >
              <ClearIcon />
            </div>
          </div>
          <div className={classes.content}>
            <span className={classes.content_title}>
              <a href="#" className={classes.link_antiunderline}>
                Tất cả sản phẩm dành cho nam
              </a>
            </span>
            <span className={classes.content_title}>
              <a href="#" className={classes.link_antiunderline}>
                Hàng mới về
              </a>
            </span>

            <span className={classes.content_title} onClick={handleClickShoes}>
              <a href="#" className={classes.link_antiunderline}>
                Giày
              </a>
              <span className={classes.icon_fixed}>
                <ArrowForwardIosIcon />
              </span>
            </span>
            <span
              className={classes.content_title}
              onClick={handleClickClothes}
            >
              <a href="#" className={classes.link_antiunderline}>
                Quần áo
              </a>
              <span className={classes.icon_fixed}>
                <ArrowForwardIosIcon />
              </span>
            </span>
            <span
              className={classes.content_title}
              onClick={handleClickAccessory}
            >
              <a href="#" className={classes.link_antiunderline}>
                Phụ kiện
              </a>
              <span className={classes.icon_fixed}>
                <ArrowForwardIosIcon />
              </span>
            </span>
            <span className={classes.content_title}>
              <a href="#" className={classes.link_antiunderline}>
                Giảm giá
              </a>
            </span>
          </div>
        </div>
        {/* //? Children screen */}
        <MaleMenuShoes
          openDrawerShoes={openDrawerShoes}
          setOpenDrawerShoes={setOpenDrawerShoes}
        />
        <MaleMenuClothes
          openDrawerClothes={openDrawerClothes}
          setOpenDrawerClothes={setOpenDrawerClothes}
        />
        <MaleMenuAccessory
          openDrawerAccessory={openDrawerAccessory}
          setOpenDrawerAccessory={setOpenDrawerAccessory}
        />
      </div>
    </Drawer>
  );
}

export default MaleMenuRes;
