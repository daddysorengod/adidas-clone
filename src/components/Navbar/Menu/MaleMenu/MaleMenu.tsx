import React from "react";
import { useStyles } from "./MaleMenu.css";

function MaleMenu() {
  const classes = useStyles();

  return (
    //? Component-----------------------------------------
    <div className={classes.menu_container}>
      {/* //? menu_body----------------------------------- */}
      <div className={classes.menu_body}>
        {/* //? menu_special------------------------------ */}
        <div className={classes.menu_special}>
          <p className={classes.menu_title}>
            <a href="#" className={classes.link}>
              Đặc sắc
            </a>
          </p>
          <p className={classes.space5}>
            <a href="#" className={classes.link}>
              Hàng mới về
            </a>
          </p>
          <p className={classes.space5}>
            <a href="#" className={classes.link}>
              Những mặt hàng bán chạy nhất tuần này
            </a>
          </p>
          <p className={classes.space5}>
            <a href="#" className={classes.link}>
              Ultraboost21 - Màu sắc mới
            </a>
          </p>
          <p className={classes.space5}>
            <a href="#" className={classes.link}>
              Stan Smith
            </a>
          </p>
          <p className={classes.space5}>
            <a href="#" className={classes.link}>
              4D
            </a>
          </p>
          <p className={classes.space5}>
            <a href="#" className={classes.link}>
              ZX
            </a>
          </p>
          <p className={classes.space5}>
            <a href="#" className={classes.link}>
              ADILETTE
            </a>
          </p>
        </div>

        {/* //? menu_main----------------------------------- */}
        <div className={classes.menu_main}>
          {/* //* Children---------------------------------- */}
          <div className={classes.menu_main_items}>
            <p className={classes.menu_title}>
              <a href="#" className={classes.link}>
                Giày
              </a>
            </p>
            <p className={classes.space5}>
              <a href="#" className={classes.link}>
                Dòng sản phẩm Originals
              </a>
            </p>
            <p className={classes.space5}>
              <a href="#" className={classes.link}>
                Bóng đá
              </a>
            </p>
            <p className={classes.space5}>
              <a href="#" className={classes.link}>
                Chạy
              </a>
            </p>
            <p className={classes.space5}>
              <a href="#" className={classes.link}>
                Tập luyện
              </a>
            </p>
            <p className={classes.space5}>
              <a href="#" className={classes.link}>
                Dép
              </a>
            </p>
            <p className={classes.space5}>
              <a href="#" className={classes.link}>
                Essentials
              </a>
            </p>
            <p className={classes.space5}>
              <a href="#" className={classes.link}>
                Ngoài trời
              </a>
            </p>
            <p className={classes.space5}>
              <a href="#" className={classes.link}>
                Bóng rổ
              </a>
            </p>
            <p className={classes.space5}>
              <a href="#" className={classes.link}>
                Quần vợt
              </a>
            </p>
          </div>
          <div className={classes.menu_main_items}>
            <p className={classes.menu_title}>
              <a href="#" className={classes.link}>
                Quần áo
              </a>
            </p>
            <p className={classes.space5}>
              <a href="#" className={classes.link}>
                Áo phông & áo Polo
              </a>
            </p>
            <p className={classes.space5}>
              <a href="#" className={classes.link}>
                Áo Jersey
              </a>
            </p>
            <p className={classes.space5}>
              <a href="#" className={classes.link}>
                Áo hoodie & Áo khoác
              </a>
            </p>
            <p className={classes.space5}>
              <a href="#" className={classes.link}>
                Áo nỉ và đồ bộ thể thao
              </a>
            </p>
            <p className={classes.space5}>
              <a href="#" className={classes.link}>
                Quần
              </a>
            </p>
            <p className={classes.space5}>
              <a href="#" className={classes.link}>
                Quần bó
              </a>
            </p>
            <p className={classes.space5}>
              <a href="#" className={classes.link}>
                Quần sóoc
              </a>
            </p>
            <p className={classes.space5}>
              <a href="#" className={classes.link}>
                Áo thun Compression Layers
              </a>
            </p>
          </div>
          <div className={classes.menu_main_items}>
            <p className={classes.menu_title}>
              <a href="#" className={classes.link}>
                Phụ kiện
              </a>
            </p>
            <p className={classes.space5}>
              <a href="#" className={classes.link}>
                Tất cả túi
              </a>
            </p>
            <p className={classes.space5}>
              <a href="#" className={classes.link}>
                Ba lô
              </a>
            </p>
            <p className={classes.space5}>
              <a href="#" className={classes.link}>
                Túi tập luyện
              </a>
            </p>
            <p className={classes.space5}>
              <a href="#" className={classes.link}>
                Tất
              </a>
            </p>
            <p className={classes.space5}>
              <a href="#" className={classes.link}>
                Mũ lưỡi trai & đội đầu
              </a>
            </p>
            <p className={classes.space5}>
              <a href="#" className={classes.link}>
                Găng tay
              </a>
            </p>
            <p className={classes.space5}>
              <a href="#" className={classes.link}>
                Bóng
              </a>
            </p>
            <p className={classes.space5}>
              <a href="#" className={classes.link}>
                Nẹp ống chân và băng buộc
              </a>
            </p>
            <p className={classes.space5}>
              <a href="#" className={classes.link}>
                Khẩu trang
              </a>
            </p>
          </div>
          <div className={classes.menu_main_items}>
            <p className={classes.menu_title}>
              <a href="#" className={classes.link}>
                Giảm giá
              </a>
            </p>
            <p className={classes.space5}>
              <a href="#" className={classes.link}>
                Giày
              </a>
            </p>
            <p className={classes.space5}>
              <a href="#" className={classes.link}>
                Quần áo
              </a>
            </p>
            <p className={classes.space5}>
              <a href="#" className={classes.link}>
                Phụ kiện
              </a>
            </p>
          </div>
          <div className={classes.menu_main_items}>
            <p className={classes.menu_title}>
              <a href="#" className={classes.link}>
                Thể thao
              </a>
            </p>
            <p className={classes.space5}>
              <a href="#" className={classes.link}>
                Bóng đá
              </a>
            </p>
            <p className={classes.space5}>
              <a href="#" className={classes.link}>
                Chạy
              </a>
            </p>
            <p className={classes.space5}>
              <a href="#" className={classes.link}>
                Tập luyện
              </a>
            </p>
            <p className={classes.space5}>
              <a href="#" className={classes.link}>
                Bóng rổ
              </a>
            </p>
            <p className={classes.space5}>
              <a href="#" className={classes.link}>
                Bơi lội
              </a>
            </p>
            <p className={classes.space5}>
              <a href="#" className={classes.link}>
                Đánh gôn
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* //? menu_footer---------------------------------- */}
      <div className={classes.menu_footer}>
        <div className={classes.menu_footer_first}>
          <strong>
            <a href="#" className={classes.link_antiunderline}>
              Tất cả sản phẩm dành cho nam
            </a>
          </strong>
        </div>
        <div className={classes.menu_footer_second}>
          <div className={classes.menu_footer_second_block}>
            <strong>
              <a href="#" className={classes.link_antiunderline}>
                Tất cả giày nam
              </a>
            </strong>
          </div>
          <div className={classes.menu_footer_second_block}>
            <strong>
              <a href="#" className={classes.link_antiunderline}>
                Tất cả quần áo nam
              </a>
            </strong>
          </div>
          <div className={classes.menu_footer_second_block}>
            <strong>
              <a href="#" className={classes.link_antiunderline}>
                Tất cả phụ kiện dành cho nam
              </a>
            </strong>
          </div>
          <div className={classes.menu_footer_second_block}>
            <strong>
              <a href="#" className={classes.link_antiunderline}>
                Tất cả đồ thể thao dành cho nam
              </a>
            </strong>
          </div>
          <div className={classes.menu_footer_second_block}></div>
        </div>
      </div>
    </div>
  );
}

export default MaleMenu;
