import React from "react";
import useStyles from './NewsLetterFooter.styles';
import CTAButton from '@app/components/CTAButton/CTAButton'

const Newsletter = () => {
  const classes = useStyles();

  return (
    <section className={classes.wrapper}>
      <div className={classes.container}>
        <div className={classes.content}>
          <div className={classes.titleNews}>
            <h4>ĐĂNG KÝ NHẬN THÔNG TIN CẬP NHẬT VÀ ƯU ĐÃI QUA EMAIL</h4>
          </div>
          <div className={classes.button}>
            <CTAButton margin={{ margin: "0 0" }} type="dark" title="ĐĂNG KÝ NHẬN BẢN TIN"/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;