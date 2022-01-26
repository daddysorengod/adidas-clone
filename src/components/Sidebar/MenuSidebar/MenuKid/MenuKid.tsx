import React, { useState } from "react";
import { useStyle } from "./KidStyle.styles";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import CloseIcon from "@material-ui/icons/Close";
import Drawer from "@material-ui/core/Drawer";
import TeenagerMenu from "./Teenager/TeenagerMenu";
import  ChildrenMenu  from "./Children/ChildrenMenu";
import LittleChildrenMenu from "./LittleChildren/LittleChildrenMenu";

const menus = [
  { title: "tất cả mặt hàng dành cho trẻ em", link: "" },
  { title: "Hàng mới về", link: "" },
  { title: "Thanh thiếu niên (8-16)" },
  { title: "Trẻ em (4-8)" },
  { title: "Trẻ nhỏ (1-4)" },
  { title: "Giảm giá", link: "" },
];

const MenuTeenager = (props: any) => {
  const classes = useStyle();
  const [openTeenager, setOpenTeenager] = useState(false);
  const [openChildren, setOpenChildren] = useState(false);
  const [openLittleChildren, setOpenLittleChildren] = useState(false);

  const handleOpenMenuChild = (item: any) => {
    if (item.title == "Thanh thiếu niên (8-16)") {
      setOpenTeenager(true);
    } else if (item.title == "Trẻ em (4-8)") {
      setOpenChildren(true);
    } else if (item.title == "Trẻ nhỏ (1-4)") {
      setOpenLittleChildren(true);
    }
  };
  return (
    <Drawer
      anchor="right"
      open={props.open}
      classes={{ paper: classes.drawer }}
    >
      <div className={classes.container}>
        <div className={classes.header}>
          <div
            className={classes.iconArrow}
            onClick={() => props.setOpen(false)}
          >
            <ArrowBackIosIcon fontSize="medium" />
          </div>
          <h2 className={classes.h2Title}>TRẺ EM</h2>
          <div
            className={classes.iconClose}
            onClick={() => props.setOpen(false)}
          >
            <CloseIcon fontSize="medium" />
          </div>
        </div>
        <div className="body">
          {menus.map((item, index) => {
            if ("link" in item) {
              return (
                <li
                  className={classes.item}
                  key={index}
                  onClick={() => handleOpenMenuChild(item)}
                >
                  <p className="item-title">{item.title}</p>
                </li>
              );
            } else {
              return (
                <li
                  className={classes.item}
                  key={index}
                  onClick={() => handleOpenMenuChild(item)}
                >
                  <p className="item-title">{item.title}</p>
                  <ArrowForwardIosIcon fontSize="medium" />
                </li>
              );
            }
          })}
        </div>
      </div>
      {<>
        <TeenagerMenu open={openTeenager}  setOpen={setOpenTeenager}/>
        <ChildrenMenu open={openChildren} setOpen={setOpenChildren}/>
        <LittleChildrenMenu open={openLittleChildren} setOpen={setOpenLittleChildren}/>
      </>}
    </Drawer>
  );
};

export default MenuTeenager;
