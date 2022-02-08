import React from "react";
import { Dialog } from "@material-ui/core";
import { useStyles } from "./Modal.css";

function ReturnGoodsModal({
  openReturnModal,
  setOpenReturnModal,
}: {
  openReturnModal: any;
  setOpenReturnModal: any;
}) {
  //useStyles
  const classes = useStyles();

  const body = (
    <div className={classes.modal_content}>
      <h1 className={classes.modal_content_ele}>TRẢ HÀNG DỄ DÀNG</h1>
      <p className={classes.modal_content_ele}>
        Nếu bạn không hài lòng với đơn hàng của mình, bạn có thể được hoàn lại
        tiền.
      </p>
      <p className={classes.modal_content_ele}>
        Vui lòng xem{" "}
        <span className={classes.modal_content_eleSpecial}>
          Chính Sách Trả Hàng
        </span>{" "}
        của chúng tôi để biết thêm chi tiết.
      </p>
    </div>
  );
  return (
    <Dialog
      open={openReturnModal}
      maxWidth="xl"
      onClose={() => setOpenReturnModal(false)}
      PaperProps={{ style: { borderRadius: "0" } }}
      className={classes.modal_box}
    >
      {body}
    </Dialog>
  );
}

export default ReturnGoodsModal;
