import React, { useState } from "react";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { useStyles } from "./DialogLang.styles";
import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';

const languageApp = ["Tiếng Việt", "English"];

function DialogLang() {
  const classes = useStyles();

  const [selectedLang, setSelectedLang] = useState(languageApp[0]);
  const [open, setOpen] = useState(false);

  return (
    <div className={classes.dialogLang}>
      <span className="dialogLang__text">{selectedLang}</span>
      <button
        type="button"
        className="dialogLang__button"
        onClick={() => setOpen(!open)}
      >
        <ExpandMoreIcon />
      </button>
      {open ? (
        <div className="dialogLang__modalSelect">
          <div className="dialog__Lang__overlay"></div>
          <div className="dialogLang--flex">
            <h3 className="dialogLang__modalSelect__text">Language Selector</h3>
            <button
              type="button"
              onClick={() => setOpen(!open)}
              className="dialogLang__btnClose"
            >
              <CloseIcon />
            </button>
          </div>
          {languageApp.map((ele) => (
            <div
              key={ele}
              onClick={() => setSelectedLang(ele)}
              className="dialogLang__modalSelect__language"
            >
              {selectedLang === ele ? (
                <CheckIcon className="dialogLang__modalSelect__checkIcon" />
              ) : (
                <div className="dialogLang__modalSelect__checkIcon"></div>
              )}
              {ele}
              <hr />
            </div>
          ))}
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}

export default DialogLang;
