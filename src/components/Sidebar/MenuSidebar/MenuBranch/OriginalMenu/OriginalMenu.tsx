import React from "react";
import CloseIcon from "@material-ui/icons/Close";
import Drawer from "@material-ui/core/Drawer";
import { useStyle } from "./OriginalStyle.styles";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

const menu = {
    title: 'DÒNG SẢN PHẨM ORIGINALS',
    items: [
        {item:'Tất cả các sản phẩm Originals',link:''},
        {item:'Original | Trang chủ',link:''},
        {item:'Giày',link:''},
        {item:'Quần áo',link:''},
        {item:'Phụ Kiện',link:''},
        {item:'Giày Ozweego',link:''},
        {item:'Home of classic',link:''}
    ]
}

const OriginalMenu = (props: any) => {
  const classes = useStyle();
  console.log(menu.items);
  return (
    <Drawer anchor="right" open={props.open} classes={{ paper: classes.drawer}}>
      <div className={classes.container}>
        <div className={classes.header}>
          <div
            className={classes.iconArrow}
            onClick={() => props.setOpen(false)}
          >
            <ArrowBackIosIcon fontSize="medium" />
          </div>
          <h2 className={classes.h2Title}>{menu.title}</h2>
          <div
            className={classes.iconClose}
            onClick={() => props.setOpen(false)}
          >
            <CloseIcon fontSize="medium" />
          </div>
        </div>
        <div className="body">
          {menu.items.map((item, index) => (
            <li
              className={classes.item}
              key={index}
            >
              <p className="item-title">{item.item}</p>
            </li>
          ))}
        </div>
      </div>
    </Drawer>
  );
};

export default OriginalMenu;
