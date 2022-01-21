import React from "react";
import { useStyle } from "./SportMenuStyle.styles";

const footballs = [
  { title: "BÓNG ĐÁ", link: "/bong_da" },
  {
    image:
      "https://www.adidas.com.vn/on/demandware.static/-/Sites-adidas-VN-Library/default/dw4b444fac/football-ss20-uniforia-launch-hp-nav-menu-d.jpg",
    link: "",
  },
  { item: "giày ống", link: "/bong_da-giay" },
  { item: "Quần áo", link: "/bong_da-quan-ao" },
  { item: "Phụ kiện", link: "/bong_da-phu-kien" },
  { item: "", link: "" },
  { item: "Giày predator", link: "/predator" },
  { item: "Giày X", link: "/x-bong-da" },
  { item: "Giày Nemeziz", link: "/nemeziz" },
];

const runs = [
  { title: "CHẠY", link: "/chay" },
  {
    image:
      "https://www.adidas.com.vn/on/demandware.static/-/Sites-adidas-VN-Library/default/dwcb8ae037/Running2.jpg",
    link: "",
  },
  { item: "Giày", link: "/chay-giay" },
  { item: "Quần áo", link: "/chay-quan-ao" },
  { item: "Phụ kiện", link: "/chay-phu-kien" },
  { item: "", link: "" },
  { item: "Ultraboost 21", link: "/ultraboots" },
  { item: "adizero", link: "/adizero" },
  { item: "X9000", link: "/X9000" },
];

const practices = [
  { title: "TẬP LUYỆN", link: "/tap-luyen" },
  {
    image:
      "https://www.adidas.com.vn/on/demandware.static/-/Sites-adidas-VN-Library/default/dw49b9d262/rdy_header_navigation.jpg",
    link: "",
  },
  { item: "Giày", link: "/tap-luyen-giay" },
  { item: "Quần áo", link: "/tap-luyen-quan-ao" },
  { item: "Phụ kiện", link: "/tap-luyen-phu-kien" },
  { item: "", link: "" },
  { item: "Heat.RDY", link: "/heat-RDY" },
  { item: "Climacool", link: "/climacool" },
  { item: "Dòng sản phẩm Essentials", link: "/Essential" },
];

const orthers = [
  { title: "CÁC MÔN THỂ THAO KHÁC", link: "/" },
  { item: "bơi lội", link: "/boi-loi" },
  { item: "đánh gôn", link: "/danh-gon" },
  { item: "quần vợt", link: "/quan-vo" },
];

const footerLinks = [
  { title: "tất cả các sản phẩm dành cho bóng đá", link: "/bong_da" },
  { title: "tất cả các sản phẩm dành cho chạy", link: "/chay" },
  { title: "tất cả các sản phẩm dành cho bóng rổ", link: "/bong-ro" },
  { title: "tất cả sản phẩm dành cho tập luyện", link: "/tap-luyen" },
];

const SportMenu = () => {
  const classSport = useStyle();

  return (
    <div className={classSport.container}>
      <div className={classSport.menuSport}>
        <div className={classSport.centerContainer}>
          <div className={classSport.menuSportItembox}>
            {footballs.map((football, index) => {
              if ("title" in football) {
                return (
                  <h4 className={classSport.h4} key={index}>
                    {football.title}
                  </h4>
                );
              }

              if ("image" in football) {
                return (
                  <img
                    className={classSport.img}
                    srcSet={football.image}
                    alt="anh day"
                    key={index}
                  />
                );
              } else
                return (
                  <li className={classSport.li} key={index}>
                    {football.item}
                  </li>
                );
            })}
          </div>
          <div className={classSport.menuSportItembox}>
            {runs.map((run, index) => {
              if ("title" in run) {
                return (
                  <h4 className={classSport.h4} key={index}>
                    {run.title}
                  </h4>
                );
              }
              if ("image" in run) {
                return (
                  <img
                    srcSet={run.image}
                    className={classSport.img}
                    alt="anh day!"
                    key={index}
                  />
                );
              } else
                return (
                  <li className={classSport.li} key={index}>
                    {run.item}
                  </li>
                );
            })}
          </div>
          <div className={classSport.menuSportItembox}>
            {practices.map((practice, index) => {
              if ("title" in practice) {
                return (
                  <h4 className={classSport.h4} key={index}>
                    {practice.title}
                  </h4>
                );
              }
              if ("image" in practice) {
                return (
                  <img
                    srcSet={practice.image}
                    alt="anh day!"
                    key={index}
                    className={classSport.img}
                  />
                );
              } else
                return (
                  <li className={classSport.li} key={index}>
                    {practice.item}
                  </li>
                );
            })}
          </div>
          <div className={classSport.menuSportItembox}>
            {orthers.map((orther, index) => {
              if ("title" in orther) {
                return (
                  <h4 className={classSport.h4} key={index}>
                    {orther.title}
                  </h4>
                );
              }
              if ("item" in orther) {
                return (
                    <li className={classSport.li} key={index}>
                    {orther.item}
                  </li>
                );
              } 
            //   else
            //     return (
            //       <li className={classSport.li} key={index}>
            //         {orther.item}
            //       </li>
            //     );
            })}
          </div>
        </div>
      </div>
      <div className={classSport.footer}>
        <div className={classSport.footerLink}>
          {footerLinks.map((footer, index) => (
            <h6 className={classSport.h6} key={index}>
              {footer.title}
            </h6>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SportMenu;
