import React from "react";
import { useStyles } from "./BrandMenuStyle.styles";

const originals = [
  {
    image:
      "https://www.adidas.com.vn/on/demandware.static/-/Sites-adidas-VN-Library/default/dwd3bdb65e/original.png",
    link: "",
  },
  {
    image:
      "https://www.adidas.com.vn/on/demandware.static/-/Sites-adidas-VN-Library/default/dw81a1e3a3/Originals_Brand_Nav_Image.jpg",
    link: "",
  },
  { item: "Giày", link: "" },
  { item: "Quần áo", link: "" },
  { item: "Phụ Kiện", link: "" },
  { space: "" },
  { item: "stan smith", link: "" },
  { item: "ZX", link: "" },
  { item: "Superstar", link: "" },
  { item: "NMD", link: "" },
];

const athletics = [
  {
    image:
      "https://www.adidas.com.vn/on/demandware.static/-/Sites-adidas-VN-Library/default/dw4528787d/adidas-logo-menu-2.jpg",
    link: "",
  },
  {
    image:
      "https://www.adidas.com.vn/on/demandware.static/-/Sites-adidas-VN-Library/default/dw6a83cf74/BornReady-Thumbnail-172x80.jpg",
    link: "",
  },
  { item: "Áo Nam", link: "" },
  { item: "Áo Nữ", link: "" },
  { item: "Hàng mới về", link: "" },
];

const footers = [
  { title: "Tất cả sản phẩm them adidas original", link: "" },
  { title: "Tất cả sản phẩm thể thao", link: "" },
];

const BrandMenu = () => {
  const classes = useStyles();

  return (
    <div className={classes.cacto}>
      <div className={classes.lable}>
        <div className={classes.boxLable}>
          {originals.map((original, index) => {
            if ("image" in original) {
              return (
                <img
                  className={classes.image}
                  srcSet={original.image}
                  key={index}
                />
              );
            }
            if ("space" in original) {
              return <div className={classes.space} key={index}></div>;
            }
            if ("item" in original) {
              return (
                <li className={classes.li} key={index}>
                  {original.item}
                </li>
              );
            }
          })}
        </div>
        <div className={classes.boxLable}>
          {athletics.map((athletic, index) => {
            if ("image" in athletic) {
              return (
                <img
                  className={classes.image}
                  srcSet={athletic.image}
                  key={index}
                />
              );
            } else
              return (
                <li className={classes.li} key={index}>
                  {athletic.item}
                </li>
              );
          })}
        </div>
      </div>
      <div className={classes.footer}>
        {footers.map((footer, index) => (
          <h6 className={classes.h6} key={index}>
            {footer.title}
          </h6>
        ))}
      </div>
    </div>
  );
};

export default BrandMenu;
