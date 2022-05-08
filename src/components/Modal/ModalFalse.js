import { Button } from "@material-ui/core";
import React from "react";
import "./Modal.css";
import ClearOutlinedIcon from "@mui/icons-material/ClearOutlined";

function ModalFalse({ showFalse, setShowFalse, countFalse, setCountFalse }) {
  const CountF = () => {
    setCountFalse(countFalse + 1);
  };
  if (showFalse) {
    return (
      <div id="overlay">
        <div id="content">
          <h1>
            <ClearOutlinedIcon />
            不正解です!!
          </h1>
          <p>
            <Button
              variant="contained"
              onClick={() => {
                setShowFalse(false);
                CountF();
              }}
            >
              次の問題へ
            </Button>
            {/* <button
              onClick={() => {
                setShowFalse(false);
                CountF();
              }}
            >
              Next question
            </button> */}
          </p>
        </div>
      </div>
    );
  } else {
    return null;
  }
}

export default ModalFalse;
