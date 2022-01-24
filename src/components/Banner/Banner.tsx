import React from "react";
import useStyles from "./Banner.style";
import CTAButton from "../CTAButton/CTAButton";

const Banner = ({ type }: { type: any }) => {
  const classes = useStyles({ type });

  return (
    <section className={classes.bannerWrapper}>
      <a href="/vi/season_sale">
        <div className={classes.bannerContainer}>
          <div>
            <picture style={{ display: 'flex' }}>
              <source
                media="(max-width:959px)"
                srcSet="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_960,w_960/viVN/Images/vn-tet-mh-m_tcm337-833760.jpg"
              />
              <img
                src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_1920,w_1920/viVN/Images/vn-tet-mh-d_tcm337-833761.jpg"
                style={{ width: "100%" }}
              />
            </picture>
          </div>

          <div className={classes.contentWrapper}>
            <div className={classes.contentContainer}>
              <div className={classes.summaryContainer}>
                <p className={classes.summary}>
                  Giảm giá áp dụng trong giỏ hàng. Một số sản phẩm ngoại lệ.
                  <a href="/"> Điều khoản và Điều kiện đi kèm</a>
                </p>
              </div>

              <CTAButton
                margin={{ margin: "15px 0" }}
                type="light"
                title="mua ngay"
              />
            </div>
          </div>
        </div>
      </a>
    </section>
  );
};

export default Banner;
