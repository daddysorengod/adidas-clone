import React from "react";
import CloseIcon from "@material-ui/icons/Close";
import Drawer from "@material-ui/core/Drawer";
import { useStyle } from "./AdidasNEOStyle.styles";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

const menu = {
    title: 'ADIDAS NEO',
    items: [
        {item:'Tất cả các sản phẩm NEO',link:''},
        {item:'Hàng mới về',link:''},
        {item:'Giày',link:''},
        {item:'Phụ Kiện',link:''},
    ]
}

const AdidasNEOMenu = (props: any) => {
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

export default AdidasNEOMenu;
