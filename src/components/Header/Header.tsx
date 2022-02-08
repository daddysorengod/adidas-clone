import React, { useState } from "react";
import useStyles from "./Header.styles";
import FreeshipModal from "./HeaderModal/FreeshipModal";
import ReturnGoodsModal from "./HeaderModal/ReturnGoodsModal";
import PaymentModal from "./HeaderModal/PaymentModal";

const headerTitle = [
  { title: "Miễn phí giao hàng trên 1.300.000 VNĐ" },
  { title: "Trả hàng dễ dàng" },
  { title: "Nay đã có thể thanh toán bằng thẻ tín dụng!" },
];

function Header() {
  const classes = useStyles();

  //Local state
  const [openFreeModal, setOpenFreeModal] = useState(false);
  const [openReturnModal, setOpenReturnModal] = useState(false);
  const [openPaymentModal, setOpenPaymentModal] = useState(false);

  const handleOpenModal = (item: any) => {
    if (item.title === "Miễn phí giao hàng trên 1.300.000 VNĐ") {
      setOpenFreeModal(true);
    } else if (item.title === "Trả hàng dễ dàng") {
      setOpenReturnModal(true);
    } else if (item.title === "Nay đã có thể thanh toán bằng thẻ tín dụng!") {
      setOpenPaymentModal(true);
    }
  };
  return (
    <header>
      <div className={classes.wrapper}>
        <div className={classes.container}>
          {headerTitle.map(item => (
            <div className={classes.item} onClick={() => handleOpenModal(item)}>
              <p>{item.title}</p>
            </div>
          ))}
        </div>
        {
          <>
            <FreeshipModal
              openFreeModal={openFreeModal}
              setOpenFreeModal={setOpenFreeModal}
            />
            <ReturnGoodsModal
              openReturnModal={openReturnModal}
              setOpenReturnModal={setOpenReturnModal}
            />
            <PaymentModal
              openPaymentModal={openPaymentModal}
              setOpenPaymentModal={setOpenPaymentModal}
            />
          </>
        }
      </div>
    </header>
  );
}

export default Header;
