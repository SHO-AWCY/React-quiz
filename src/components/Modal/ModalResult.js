import { Button } from "@material-ui/core";
import React from "react";
import "./Modal.css";
import { Link } from "react-router-dom";

function ModalResult({ showResult, setShowResult, countTrue, countFalse }) {
  countTrue + countFalse === 5 && setShowResult(true);

  if (showResult) {
    return (
      <div id="overlay">
        <div id="content">
          <p>正解数は5問中 {countTrue} 問です</p>
          <Button variant="contained" component={Link} to="/">
            ホーム画面に戻る
          </Button>
        </div>
      </div>
    );
  } else {
    return null;
  }
}

export default ModalResult;
