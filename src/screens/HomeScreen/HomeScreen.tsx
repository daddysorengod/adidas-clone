import Banner from "@app/components/Banner/Banner";
import Navbar from "@app/components/Navbar/Navbar";
import BannerVideo from "@app/components/BannerVideo/BannerVideo";
import React, { useState, useEffect } from "react";
import MenuTab from "@app/components/MenuTab/MenuTab";
import Discover from "@app/components/Discover/Discover";
import Categories from "./components/Categories/Categories";
import useStyles from './HomeScreen.styles';
import Newsletter from "@app/components/Newsletter/Newsletter";

const HomeScreen = () => {
  const classes = useStyles();

  return (
    <div>
      <Navbar />
      <div className={classes.container}>
        <Banner type="light" />
        <BannerVideo
          type="dark"
          video="https://brand.assets.adidas.com/video/upload/q_auto,vc_auto/video/upload/Desktop_-_2880_x1280_kprgir.mp4"
          videoAlt="https://brand.assets.adidas.com/video/upload/q_auto,vc_auto/video/upload/Mobile_-_750_x_964_ebp7ic.mp4"
          title="never change your stripes"
          summary="Our festival-ready collection has arrived"
          buttonTitle="shop now"
        />
        <BannerVideo
          type="light"
          video="https://brand.assets.adidas.com/video/upload/q_auto,vc_auto/video/upload/global%20brand%20publishing/Running/UB22/Educate/running-ss22-ultraboost-launch-hp-masthead-large-d.mp4"
          videoAlt="https://brand.assets.adidas.com/video/upload/q_auto,vc_auto/video/upload/global%20brand%20publishing/Running/UB22/Educate/running-ss22-ultraboost-launch-hp-masthead-large-t.mp4"
          title="SAY HELLO TO ULTRABOOST 22"
          summary="Được cải tiến với 360˚ cải thiện độ ôm cho nữ để hoàn trả năng lượng tối ưu."
          buttonTitle="mua ngay"
        />
        <MenuTab />
        <Discover />
        <Categories />
        <Newsletter />
      </div>
    </div>
  );
};

export default HomeScreen;
