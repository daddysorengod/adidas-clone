import React, { useState } from "react";
import { useStyle } from "./MenuSportStyle.styles";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import CloseIcon from "@material-ui/icons/Close";
import Drawer from "@material-ui/core/Drawer";
import MenuFootball from "./Football/MenuFootball";
import MenuBasketball from "./Basketball/MenuBasketball";
import MenuRun from "./Run/MenuRun";
import MenuPractice from "./Practice/MenuPractice";
import MenuOrther from "./Orther/MenuOrther";

const menus = [
  "Bóng đá",
  "Bóng rổ",
  "Chạy",
  "Tập luyện",
  "Các môn thể thao khác",
];

const MenuSport = (props:any) => {
  const [openFootball, setOpenFootball] = useState(false)
  const [openBasketball, setBasketball] = useState(false)
  const [openRun, setRun] = useState(false)
  const [openPractice , setOpenPractice]  = useState(false)
  const [OpenOrtherSport, setOpenOrtherSport] = useState(false)

  const classes = useStyle();
  const handleOpenMenuChild = (item:any) => {
    if (item == 'Bóng đá') {
      setOpenFootball(true)
    } else if (item == 'Bóng rổ') {
      setBasketball(true)
    } else if (item == 'Chạy') {
      setRun(true)
    } else if (item == 'Tập luyện') {
      setOpenPractice(true)
    } else if (item == 'Các môn thể thao khác') {
      setOpenOrtherSport(true)
    }
  }
  return (
    <Drawer anchor="right" open={props.open} classes={{ paper: classes.drawer}}>
      <div className={classes.container}>
        <div className={classes.header}>
          <div className={classes.iconArrow} onClick={() => props.setOpen(false)}>
            <ArrowBackIosIcon fontSize="medium" />
          </div>
          <h2 className={classes.h2Title}>THỂ THAO</h2>
          <div className={classes.iconClose} onClick={() => props.setOpen(false)}>
            <CloseIcon fontSize="medium" />
          </div>
        </div>
        <div className="body">
          {menus.map((item, index) => (
            <li className={classes.item} key={index} onClick={() => handleOpenMenuChild(item)}>
              <p className="item-title">{item}</p>
              <ArrowForwardIosIcon fontSize="medium"/>
            </li>
          ))}
        </div>
      </div>
        {
          <>
            <MenuFootball open={openFootball} setOpen={setOpenFootball}/>
            <MenuBasketball open={openBasketball} setOpen={setBasketball}/>
            <MenuRun open={openRun} setOpen={setRun}/>
            <MenuPractice open={openPractice} setOpen={setOpenPractice}/>
            <MenuOrther open={OpenOrtherSport} setOpen={setOpenOrtherSport}/>
          </>

        }
     </Drawer>
  );
};

export default MenuSport;
