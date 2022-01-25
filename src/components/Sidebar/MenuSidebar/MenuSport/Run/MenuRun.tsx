import React from "react";
import CloseIcon from "@material-ui/icons/Close";
import Drawer from "@material-ui/core/Drawer";
import { useStyle } from "../MenuSportStyle.styles";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

const menu = {
    title: 'Chạy',
    items: [
        {item:'Tất cả các sản phẩm dành cho Chạy',link:''},
        {item:'Chạy | Trag chủ',link:''},
        {item:'Giày',link:''},
        {item:'QUần áo',link:''},
        {item:'Phụ kiện',link:''},
        {item:'Dòng sản phẩm Alphabounce',link:''},
        {item:'Giày PureBOOST',link:''},
        {item:'Giày UltraBOOST',link:''},
    ]
}

const MenuRun = (props: any) => {
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

export default MenuRun;
