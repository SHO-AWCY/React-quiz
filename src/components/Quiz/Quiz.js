import { Button } from "@material-ui/core";
import React, { useState } from "react";

import ModalFalse from "../Modal/ModalFalse";
import ModalResult from "../Modal/ModalResult";
import ModalTrue from "../Modal/ModalTrue";

function Quiz({
  questionContent,
  choice1,
  choice2,
  choice3,
  choice4,
  Choice1TF,
  Choice2TF,
  Choice3TF,
  Choice4TF,
  quizCount,
  setQuizCount,
  countTrue,
  setCountTrue,
  countFalse,
  setCountFalse,
}) {
  const [showTrue, setShowTrue] = useState(false);
  const [showFalse, setShowFalse] = useState(false);
  const [showResult, setShowResult] = useState(false);

  const ClickButton1 = () => {
    Choice1TF === true ? setShowTrue(true) : setShowFalse(true);
  };
  const ClickButton2 = () => {
    Choice2TF === true ? setShowTrue(true) : setShowFalse(true);
  };
  const ClickButton3 = () => {
    Choice3TF === true ? setShowTrue(true) : setShowFalse(true);
  };
  const ClickButton4 = () => {
    Choice4TF === true ? setShowTrue(true) : setShowFalse(true);
  };

  return (
    <div>
      <div className="quiz_content">
        <h1>{questionContent}</h1>
      </div>
      <div className="choices">
        <div className="choice1">
          <Button onClick={ClickButton1} variant="contained">
            {choice1}
          </Button>
          {/* <button onClick={ClickButton1}>{choice1}</button> */}
        </div>
        <div className="choice2">
          <Button onClick={ClickButton2} variant="contained">
            {choice2}
          </Button>
          {/* <button onClick={ClickButton2}>{choice2}</button> */}
        </div>
        <div className="choice3">
          <Button onClick={ClickButton3} variant="contained">
            {choice3}
          </Button>
          {/* <button onClick={ClickButton3}>{choice3}</button> */}
        </div>
        <div className="choice4">
          <Button onClick={ClickButton4} variant="contained">
            {choice4}
          </Button>
          {/* <button onClick={ClickButton4}>{choice4}</button> */}
        </div>
      </div>
      <ModalTrue
        showTrue={showTrue}
        setShowTrue={setShowTrue}
        countTrue={countTrue}
        setCountTrue={setCountTrue}
        countFalse={countFalse}
        quizCount={quizCount}
        setQuizCount={setQuizCount}
      />
      <ModalFalse
        showFalse={showFalse}
        setShowFalse={setShowFalse}
        countFalse={countFalse}
        setCountFalse={setCountFalse}
        countTrue={countTrue}
        quizCount={quizCount}
        setQuizCount={setQuizCount}
      />
      <ModalResult
        showResult={showResult}
        setShowResult={setShowResult}
        countTrue={countTrue}
        countFalse={countFalse}
      />
    </div>
  );
}

export default Quiz;
