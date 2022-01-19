import React, { useState } from "react";
import useStyles from "./Navbar.styles";
import LocalMallOutlinedIcon from "@material-ui/icons/LocalMallOutlined";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import CustomInput from "../CustomInput/CustomInput";
import MenuOutlinedIcon from "@material-ui/icons/MenuOutlined";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";

function Navbar() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleOpenMenu = () => {
    setOpen(!open);
  };

  return (
    <div className="header-light">
      <Sidebar open={open} setOpen={setOpen} />
      <div>
        <Header />
        <div className={classes.wrapperTop}>
          <div className={classes.containerTop}>
            <a href="/" className={classes.itemTop}>
              trợ giúp
            </a>
            <a href="/" className={classes.itemTop}>
              trình theo dõi đơn hàng
            </a>
            <a href="/" className={classes.itemTop}>
              đăng ký bản tin
            </a>
            <a href="/" className={classes.itemTop}>
              đăng nhập
            </a>

            <div className="menu-lang-container">
              <a className={classes.itemTop} href="/">
                <img
                  src="https://adl-foundation.adidas.com/flags/1-0-0/vn.svg"
                  alt=""
                  style={{ width: 20, height: "100%" }}
                />
              </a>
            </div>
          </div>
        </div>

        <div className={classes.wrapperBot}>
          <div className={classes.containerBot}>
            <div className={classes.hamburgerIcon}>
              <div className={classes.hamburgerContainer}>
                <MenuOutlinedIcon onClick={handleOpenMenu} />
              </div>
            </div>
            <div className={classes.mainLogoContainer}>
              <a className={classes.mainLogo} href="/">
                <img
                  src="https://www.adidas.com.vn/glass/react/445a6c0/assets/img/icon-adidas-logo.svg"
                  alt="logo"
                  className={classes.mainLogoImg}
                />
              </a>
            </div>

            <div className={classes.menu}>
              <div className={classes.itemContainer}>
                <a className={classes.item} href="/">
                  <strong>Nam</strong>
                </a>
              </div>
              <div className={classes.itemContainer}>
                <a className={classes.item} href="/">
                  <strong>Nữ</strong>
                </a>
              </div>
              <div className={classes.itemContainer}>
                <a className={classes.item} href="/">
                  <strong>Trẻ em</strong>
                </a>
              </div>
              <div className={classes.itemContainer}>
                <a className={classes.item} href="/">
                  Thể thao
                </a>
              </div>
              <div className={classes.itemContainer}>
                <a className={classes.item} href="/">
                  Các nhãn hiệu
                </a>
              </div>
            </div>

            <div
              style={{ minWidth: "96px", display: "flex" }}
              className={classes.menuRight}
            >
              <CustomInput />

              <div className={`${classes.rightIcon} ${classes.favoriteIcon}`}>
                <a href="/">
                  <FavoriteBorderOutlinedIcon />
                </a>
              </div>

              <div className={`${classes.rightIcon} ${classes.searchIcon}`}>
                <SearchOutlinedIcon />
              </div>

              <div className={classes.rightIcon}>
                <a href="/">
                  <LocalMallOutlinedIcon />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
