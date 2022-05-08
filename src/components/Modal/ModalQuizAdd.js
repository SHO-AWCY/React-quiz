import { Button } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";

function ModalQuizAdd({ showQuizAdd, setShowQuizAdd }) {
  if (showQuizAdd) {
    return (
      <div id="overlay">
        <div id="content">
          <h1>クイズを追加しました！</h1>
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

export default ModalQuizAdd;
