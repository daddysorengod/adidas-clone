import React, { useEffect, useState } from "react";
import useStyles from './Newsletter.styles';
import { Checkbox, Dialog, FormControlLabel, IconButton, Radio, RadioGroup, TextField } from "@material-ui/core";
import * as Yup from 'yup'
import CTA from "../CTAButton/CTAButton";
import { Close as CloseIcon } from "@material-ui/icons";
interface NewsletterProps {
  open: boolean,
  onClose: () => void
}

const initialValue = {
  email: ''
}

const yupValidation = Yup.object().shape({
  email: Yup.string().email('Invalid Email').required('Required'),
  gender: Yup.string().required('Required'),
  termsOfService: Yup.boolean().oneOf([true], 'Bla blo').required('bal blao')
});

const Newsletter = (props: NewsletterProps) => {
  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState("");
  // 
  const [gender, setGender] = useState("");
  const [validGender, setValidGender] = useState(" ");
  // 
  const [ageConfirm, setAgeConfirm] = useState(false);
  const [validAge, setValidAge] = useState("");
  // 
  const [promotionConfirm, setPromotionConfirm] = useState(false);
  const [validPromotion, setValidPromotion] = useState("");
  // 
  const [termsConfirm, setTermsConfirm] = useState(false);
  const [validTerms, setValidTerms] = useState("")
  // 
  const [privacyConfirm, setPrivacyConfirm] = useState(false);
  const [validPrivacy, setValidPrivacy] = useState("")

  const { open, onClose } = props;
  const classes = useStyles();

  const handleClose = (e: any) => {
    onClose()
  }

  useEffect(() => {
    checkValid("email")
  }, [email])


  const handleEmailInput = (e: any) => {
    const emailInput = e.target.value
    setEmail(emailInput)
  }

  const handleAgeConfirm = (e: any) => {
    const ageInput = e.target.checked
    if (ageInput) {
      setValidAge("")
    }
    setAgeConfirm(ageInput)
  }

  const handleGenderChoose = (e: any) => {
    const gender = e.target.value
    setGender(gender)
  }

  const handlePromotionConfirm = (e: any) => {
    const promotionInput = e.target.checked
    if (promotionInput) {
      setValidPromotion("")
    }
    setPromotionConfirm(promotionInput)
  }

  const handleTermsConfirm = (e: any) => {
    const termsInput = e.target.checked;
    if (termsInput) {
      setValidTerms("")
    }
    setTermsConfirm(termsInput)
  }

  const handlePrivacyConfirm = (e: any) => {
    const privacyInput = e.target.checked;
    if (privacyInput) {
      setValidPrivacy("")
    }
    setPrivacyConfirm(privacyInput)
  }

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (checkValid("all"))
      onClose();
  }

  const checkValid = (type: string) => {
    let result = false;
    if (type === 'email' || type === 'all') {
      const checkEmail = Yup.string().email().isValidSync(email)
      if (!checkEmail) {
        setValidEmail("Vui lòng nhập địa chỉ email hợp lệ")
      } else {
        setValidEmail("")
      }
      result = checkEmail
    } else if (type === 'gender' || type === 'all') {
      const checkGender = Yup.string().required().isValidSync(gender)
      if (!checkGender) {
        setValidGender("Vui lòng chọn ô này")
      } else {
        setValidGender("")
      }
      result = checkGender
    }
    if (type === 'all') {
      const checkAge = Yup.boolean().isTrue().isValidSync(ageConfirm)
      const checkPromotion = Yup.boolean().isTrue().isValidSync(promotionConfirm)
      const checkTerms = Yup.boolean().isTrue().isValidSync(termsConfirm)
      const checkPrivacy = Yup.boolean().isTrue().isValidSync(privacyConfirm)
      if (!checkAge) {
        setValidAge("Vui lòng chọn ô này. Bạn nhỏ tuổi hơn? Rất tiếc, bạn không thể tạo tài khoản vì chưa đủ tuổi.")
      } else {
        setValidAge("")
      }

      if (!checkPromotion) {
        setValidPromotion("Bắt buộc phải nhập trường này")
      } else {
        setValidPromotion("")
      }

      if (!checkTerms) {
        setValidTerms("Vui lòng đồng ý với các điều khoản và điều kiện")
      } else {
        setValidTerms("")
      }

      if (!checkPrivacy) {
        setValidPrivacy("Vui lòng đòng ý với Chính sách Bảo mật")
      } else {
        setValidPrivacy("")
      }
      result = (checkAge && checkPromotion && checkTerms && checkPrivacy)
    }

    return result
  }

  return (

    <Dialog onClose={handleClose} open={open} className="newsletter-dialog">
      <div className={classes.container}>
        <div className={classes.content}>
          <form onSubmit={handleSubmit}>
            <h1 className={classes.h1}>ĐĂNG KÝ NGAY ĐỂ NHẬN KHUYẾN MÃI 10%</h1>
            <div className={classes.eachForm}>
              <TextField
                type="text"
                placeholder="Email *"
                variant="outlined"
                fullWidth
                style={{ height: '55px' }}
                color={!validEmail ? "primary" : "secondary"}
                onInput={handleEmailInput}
                required

              />
              {validEmail && <p className={classes.error}>{validEmail}</p>}
            </div>
            <div className={classes.eachForm}>
              <FormControlLabel
                control={<Checkbox className={classes.checkbox} color="default" />}
                label="Đúng, tôi trên 15 tuổi *"
                id="age-confirm"
                onChange={handleAgeConfirm}
              />
              {validAge && <p className={classes.error}>{validAge}</p>}
            </div>
            <div className={classes.eachForm}>
              <p style={{
                fontSize: '13px',
                lineHeight: '17px',
                letterSpacing: '2px',
                textTransform: 'uppercase'
              }}>
                Gioi tinh
              </p>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="Nu"
                name="gender"
                className={classes.radius}
                onChange={handleGenderChoose}
              >
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                  <FormControlLabel value="Nu" control={<Radio color="default" />} label="Nữ" />
                  <FormControlLabel value="Nam" control={<Radio color="default" />} label="Nam" />
                  <FormControlLabel value="Khac" control={<Radio color="default" />} label="Không muốn nêu" />
                </div>
              </RadioGroup>
              {validGender && <p className={classes.error}>{validGender}</p>}
            </div>
            <div className={classes.eachForm}>
              <FormControlLabel
                control={<Checkbox color="default" />}
                label="Tôi theo đây đồng ý việc sử dụng thông tin cá nhân của tôi cho các mục đích tiếp thị và khuyến mãi được quy định tại Chính sách Bảo mật adidas"
                id="promote-policy-confirm"
                labelPlacement="end"
                onChange={handlePromotionConfirm}
              />
              {validPromotion && <p className={classes.error}>{validPromotion}</p>}
            </div>
            <div className={classes.eachForm}>
              <FormControlLabel
                control={<Checkbox color="default" />}
                label="Tôi đã đọc và đồng ý với Điều khoản và điều kiện"
                id="terms-confirm"
                labelPlacement="end"
                onChange={handleTermsConfirm}
              />
              {validTerms && <p className={classes.error}>{validTerms}</p>}
            </div>
            <div className={classes.eachForm}>
              <FormControlLabel
                control={<Checkbox color="default" />}
                label="Tôi theo đây đồng ý việc chuyển giao, chia sẻ, sử dụng, thu thập và tiết lộ thông tin cá nhân của tôi cho các bên thứ ba được quy định tại Chính sách Bảo mật adidas."
                id="privacy-policy-confirm"
                labelPlacement="end"
                onChange={handlePrivacyConfirm}
              />
              {validPrivacy && <p className={classes.error}>{validPrivacy}</p>}
            </div>
            <CTA margin={{ margin: "15px 0" }} type="dark" title="ĐĂNG KÝ" />
          </form>
        </div>
      </div >
      <button className={classes.closeBtn} onClick={onClose}>
        <CloseIcon />
      </button>
    </Dialog >
  );
};

export default Newsletter;
