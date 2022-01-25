import React from "react";
import useStyles from "./Header.styles";

const headerTitle = [
  { title: "Miễn phí giao hàng trên 1.300.000 VNĐ" },
  { title: "Trả hàng dễ dàng" },
  { title: "Nay đã có thể thanh toán bằng thẻ tín dụng!" },
];

function Header() {
  const classes = useStyles();

  return (
    <header>
      <div className={classes.wrapper}>
        <div className={classes.container}>
          {headerTitle.map((item) => (
            <div className={classes.item}>
              <a href="/">{item.title}</a>
            </div>
          ))}
        </div>
      </div>
    </header>
  );
}

export default Header;
