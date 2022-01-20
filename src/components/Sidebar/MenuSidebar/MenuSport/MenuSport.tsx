import React, { useState } from "react";
import { useStyle } from "./MenuSportStyle.styles";
import CloseIcon from "@material-ui/icons/Close";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

const menu = {
  title: "THỂ THAO",
  items: [
    { item: "Bóng đá", link: "/bong_da-giay" },
    { item: "Bóng rổ", link: "/bong_da-quan-ao" },
    { item: "Chạy", link: "/bong_da-phu-kien" },
    { item: "Tập luyện", link: "/predator" },
    { item: "Các môn thể thao khác", link: "/x-bong-da" },
    { item: "Giày Nemeziz", link: "/nemeziz" },
  ],
};

const MenuSport = () => {
  const classes = useStyle();
  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <div className={classes.iconArrow}>
          <ArrowBackIosIcon fontSize="large" />
        </div>
        <h2 className={classes.h2Title}>{menu.title}</h2>
        <div className={classes.iconClose}>
          <CloseIcon fontSize="large" />
        </div>
      </div>
      <div className="body">
        {menu.items.map((item, index) => (
          <li className={classes.item} key={index}>
            <p className="item-title">{item.item}</p>
            <ArrowBackIosIcon fontSize="medium" />
          </li>
        ))}
      </div>
    </div>
  );
};

export default MenuSport;
