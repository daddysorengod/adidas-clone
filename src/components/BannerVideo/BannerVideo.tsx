import React from "react";
import useStyles from "../Banner/Banner.style";
import CTAButton from "../CTAButton/CTAButton";
import useWindowSize from "@app/hooks/useWindowSize";

function BannerVideo({
  type,
  video,
  videoAlt,
  img,
  imgAlt,
  title,
  summary,
  buttonTitle,
}: {
  type: any;
  video?: any;
  videoAlt?: any;
  img?: any;
  imgAlt?: any;
  title: any;
  summary: any;
  buttonTitle?: any;
}) {
  const classes = useStyles({ type });
  const dimension = useWindowSize();

  return (
    <section className={classes.bannerWrapper}>
      <a href="/vi/season_sale">
        <div className={classes.bannerContainer}>
          <div>
            {video && <video
              muted
              loop={true}
              autoPlay={true}
              playsInline
              src={dimension.width < 960 ? videoAlt : video}
              className={classes.videoContainer}
            ></video>}
            {
              img && <img
                src={img}
                alt={imgAlt}
                style={{ width: '100%' }}
              />
            }
          </div>

          <div className={classes.contentWrapper}>
            <div className={classes.contentContainer}>
              <div className={classes.summaryContainer} style={{ color: type === "light" ? "white" : "black" }}>
                <h1 className={classes.title}>{title}</h1>
                <p className={classes.summary}>{summary}</p>
              </div>

              {buttonTitle && <CTAButton
                margin={{ margin: "15px 0" }}
                type={type}
                title={buttonTitle}
              />}
            </div>
          </div>
        </div>
      </a>
    </section>
  );
}

export default BannerVideo;
