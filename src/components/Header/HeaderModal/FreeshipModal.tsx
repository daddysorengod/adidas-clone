import React from "react";
import { Dialog } from "@material-ui/core";
import { useStyles } from "./Modal.css";

function FreeshipModal({
  openFreeModal,
  setOpenFreeModal,
}: {
  openFreeModal: any;
  setOpenFreeModal: any;
}) {
  //useStyles
  const classes = useStyles();

  const body = (
    <div className={classes.modal_content}>
      <h1 className={classes.modal_content_ele}>
        MIỄN PHÍ GIAO HÀNG TRÊN 1.300.000 VND
      </h1>
      <p className={classes.modal_content_ele}>
        Miễn phí giao hàng cho tất cả các đơn hàng từ 1.300.000 VNĐ trở lên.
      </p>
      <p className={classes.modal_content_ele}>
        Cho các đơn hàng còn lại, phí giao hàng tiêu chuẩn được áp dụng.
      </p>
      <p className={classes.modal_content_ele}>
        Hãy kiểm tra{" "}
        <span className={classes.modal_content_eleSpecial}>
          Điều Khoản & Điều Kiện
        </span>{" "}
        giao hàng của chúng tôi để biết thêm chi tiết.
      </p>
    </div>
  );

  return (
    <>
      <Dialog
        open={openFreeModal}
        maxWidth="xl"
        onClose={() => setOpenFreeModal(false)}
        PaperProps={{ style: { borderRadius: "0" } }}
        className={classes.modal_box}
      >
        {body}
      </Dialog>
    </>
  );
}

export default FreeshipModal;
