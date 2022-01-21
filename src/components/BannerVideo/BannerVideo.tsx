import React from "react";
import useStyles from "../Banner/Banner.style";
import CTAButton from "../CTAButton/CTAButton";
import useWindowSize from "@app/hooks/useWindowSize";

function BannerVideo({
  type,
  video,
  videoAlt,
  title,
  summary,
  buttonTitle,
}: {
  type: any;
  video: any;
  videoAlt: any;
  title: any;
  summary: any;
  buttonTitle: any;
}) {
  const classes = useStyles({ type });
  const dimension = useWindowSize();  

  return (
    <section className={classes.bannerWrapper}>
      <a href="/vi/season_sale">
        <div className={classes.bannerContainer}>
          <div>
            <video
              muted
              loop={true}
              autoPlay={true}
              playsInline
              src={dimension.width < 960 ? videoAlt : video}
              className={classes.videoContainer}
            ></video>
          </div>

          <div className={classes.contentWrapper}>
            <div className={classes.contentContainer}>
              <div className={classes.summaryContainer}>
                <h1 className={classes.title}>{title}</h1>
                <p className={classes.summary}>{summary}</p>
              </div>

              <CTAButton
                margin={{ margin: "15px 0" }}
                type={type}
                title={buttonTitle}
              />
            </div>
          </div>
        </div>
      </a>
    </section>
  );
}

export default BannerVideo;
