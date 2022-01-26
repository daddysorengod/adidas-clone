import React from "react";
import useStyles from "./Discover.styles";
import Button from "../Button/Button";
import useWindowSize from "@app/hooks/useWindowSize";

const discover = [
  {
    id: 1,
    media:
      "https://brand.assets.adidas.com/video/upload/q_auto,vc_auto/video/upload/originals-fw21-forum-drop1-launch-catlp-teaser-card-2x1-d_tlehpx.mp4",
    mediaAlt:
      "https://brand.assets.adidas.com/video/upload/q_auto,vc_auto/video/upload/originals-fw21-forum-drop1-launch-catlp-teaser-card-2x1-m_zjyrnh.mp4",
    type: "video",
    title: "A NEW GENERATION",
    summary:
      "Náo nhiệt và táo bạo nhưng luôn cởi mở — đôi giày sáng tạo cho chính bạn.",
    buttonTitle: "Mua ngay",
  },
  {
    id: 2,
    media:
      "https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/viVN/Images/facecovering-hp-tc-d_tcm337-694777.jpg",
    mediaAlt: "",
    type: "image",
    title: "WE'VE GOT YOU COVERED",
    summary:
      "Discover the adidas Face Cover with an improved comfort, designed for exercise.",
    buttonTitle: "Shop now",
  },
];

const Discover = () => {
  const classes = useStyles();
  const dimension = useWindowSize();

  return (
    <section className={classes.wrapper}>
      <div className={classes.container}>
        {discover.map(item => (
          <div className={classes.itemContainer}>
            <div className="">
              {item.type === "video" ? (
                <video
                  className={classes.itemMedia}
                  autoPlay={true}
                  muted
                  loop
                  src={dimension.width < 960 ? item.mediaAlt : item.media}
                ></video>
              ) : (
                <img className={classes.itemMedia} src={item.media} alt="" />
              )}
            </div>
            <div className={classes.itemContent}>
              <strong>{item.title}</strong>
              <p className={classes.summary}>{item.summary}</p>
              <Button title={item.buttonTitle} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Discover;
