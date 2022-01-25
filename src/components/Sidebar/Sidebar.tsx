import React, { useState } from "react";
import useStyles from "./Sidebar.styles";
import CloseIcon from "@material-ui/icons/Close";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import MenuSport from "./MenuSidebar/MenuSport/MenuSport";
import MenuTeenager from "./MenuSidebar/MenuKid/MenuKid";
import MenuBranch from "./MenuSidebar/MenuBranch/MenuBranch";

const menu = [
  { title: "Nam", primary: true },
  { title: "Nữ", primary: true },
  { title: "Trẻ em", primary: true },
  { title: "Thể Thao", primary: false },
  { title: "Các nhãn hiệu", primary: false },
];

const Sidebar = ({ open, setOpen }: { open: any; setOpen: any }) => {
  const classes = useStyles();
  const [openSport, setOpenSport] = useState(false);
  const [openKid, setOpenKid] = useState(false);
  const [openBranch, setOpenBranch] = useState(false);
  const opened = {
    transform: open ? "translateX(0)" : "",
  };

  const handleCloseMenu = () => {
    setOpen(!open);
  };

  const handleOpenMenu = (item: any) => {
    if (item.title == "Thể Thao") {
      setOpenSport(true);
    } else if (item.title == "Trẻ em") {
      setOpenKid(true);
    } else if (item.title == "Các nhãn hiệu") {
      setOpenBranch(true);
    }
  };

  return (
    <div className={classes.wrapper} style={opened}>
      <div className={classes.header}>
        <img
          src="https://www.adidas.com.vn/glass/react/445a6c0/assets/img/icon-adidas-logo.svg"
          alt="logo"
          className={classes.mainLogoImg}
        />
      </div>
      <div className={classes.closeIcon} onClick={handleCloseMenu}>
        <CloseIcon />
      </div>
      <div className={`${classes.menuItems}`}>
        {menu.map(item => (
          <div
            className={`${classes.item} ${classes.upper} ${
              item.primary && classes.primary
            }`}
            onClick={() => handleOpenMenu(item)}
          >
            {item.title}
            <ArrowForwardIosIcon className={classes.arrowIcon} />
          </div>
        ))}
        <div className={classes.divider}></div>
        <a>
          <div className={classes.item}>Thông tin của tôi</div>
        </a>
        <a>
          <div className={classes.item}>Trình Định Vị Cửa Hàng</div>
        </a>
        <a>
          <div className={`${classes.item} ${classes.upper}`}>
            Đăng ký bản tin
          </div>
        </a>
      </div>

      <div className={classes.selector}>
        <div
          style={{ borderRight: "1px solid #e9ecef" }}
          className={classes.selectorItem}
        >
          <a>
            <img
              src="https://adl-foundation.adidas.com/flags/1-0-0/vn.svg"
              alt=""
              style={{ width: 20, height: "100%", marginRight: "15px" }}
            />
            <span>Việt Nam</span>
          </a>
        </div>
        <div className={classes.selectorItem}>
          <a>
            <span>English</span>
          </a>
        </div>
      </div>
      {
        <>
          <MenuSport open={openSport} setOpen={setOpenSport} />
          <MenuTeenager open={openKid} setOpen={setOpenKid} />
          <MenuBranch open={openBranch} setOpen={setOpenBranch} />
        </>
      }
    </div>
  );
};

export default Sidebar;
