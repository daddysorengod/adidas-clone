import React from "react";
import { Dialog } from "@material-ui/core";
import { useStyles } from "./Modal.css";

function PaymentModal({
  openPaymentModal,
  setOpenPaymentModal,
}: {
  openPaymentModal: any;
  setOpenPaymentModal: any;
}) {
  //useStyles
  const classes = useStyles();

  const body = (
    <div className={classes.modal_content}>
      <h1 className={classes.modal_content_ele}>
        NAY ĐÃ CÓ THỂ THANH TOÁN VỚI THẺ TÍN DỤNG!
      </h1>
      <p className={classes.modal_content_ele}>
        Giờ đây bạn có thể thanh toán bằng thẻ Visa và Mastercard! Lựa chọn
        phương thức
      </p>
      <p className={classes.modal_content_ele}>
        Thanh toán bằng thẻ tín dụng ở bước thanh toán. Mua các sản phẩm yêu
        thích ngay thôi!
      </p>
    </div>
  );

  return (
    <Dialog
      open={openPaymentModal}
      maxWidth="xl"
      onClose={() => setOpenPaymentModal(false)}
      PaperProps={{ style: { borderRadius: "0" } }}
      className={classes.modal_box}
    >
      {body}
    </Dialog>
  );
}

export default PaymentModal;
