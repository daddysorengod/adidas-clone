import React, { useState } from "react";
import { useStyle } from "./MenuBranchStyle.styles";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import CloseIcon from "@material-ui/icons/Close";
import Drawer from "@material-ui/core/Drawer";
import OriginalMenu from "./OriginalMenu/OriginalMenu";
import AdidasNEOMenu from "./AdidasNEOMenu/AdidasNEOMenu";
import SportBranchMenu from "./SportBranch/SportBranchMenu";

const menus = ["Dòng sản phẩm Originals", "Adidas NEO", "Thể thao"];

const MenuBranch = (props: any) => {
  const [openOriginal, setOpenOriginal] = useState(false);
  const [openAdidasNEO, setOpenAdidasNEO] = useState(false);
  const [openSport, setOpenSport] = useState(false);
  const classes = useStyle();

  const handleOpenMenuChild = (item: any) => {
    if (item == "Dòng sản phẩm Originals") {
      setOpenOriginal(true);
    } else if (item == "Adidas NEO") {
      setOpenAdidasNEO(true);
    } else if (item == "Thể thao") {
      setOpenSport(true);
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
          <h2 className={classes.h2Title}>CÁC NHẪN HIỆU</h2>
          <div
            className={classes.iconClose}
            onClick={() => props.setOpen(false)}
          >
            <CloseIcon fontSize="medium" />
          </div>
        </div>
        <div className="body">
          {menus.map((item, index) => (
            <li
              className={classes.item}
              key={index}
              onClick={() => handleOpenMenuChild(item)}
            >
              <p className="item-title">{item}</p>
              <ArrowForwardIosIcon fontSize="medium" />
            </li>
          ))}
        </div>
      </div>
      {<>
        <OriginalMenu open={openOriginal} setOpen={setOpenOriginal}/>
        <AdidasNEOMenu open={openAdidasNEO} setOpen={setOpenAdidasNEO}/>
        <SportBranchMenu open={openSport} setOpen={setOpenSport}/>
      </>}
    </Drawer>
  );
};

export default MenuBranch;
