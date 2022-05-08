import React, { useEffect, useState } from "react";
import db from "../../firebase";
import sampleSize from "lodash.samplesize";
import { collection, getDocs } from "firebase/firestore";
import Quiz from "./Quiz";

function Getquestion() {
  const [q, setQ] = useState([]);

  const [countTrue, setCountTrue] = useState(0);
  const [countFalse, setCountFalse] = useState(0);

  useEffect(() => {
    const collectionData = collection(db, "Quiz");

    getDocs(collectionData).then((querySnapshot) => {
      const QuizArray = [];
      QuizArray.push(querySnapshot.docs.map((doc) => doc.data()));
      console.log(QuizArray[0][0]);
      console.log();
      setQ(sampleSize(QuizArray[0], 1));
    });
  }, [countTrue, countFalse]);

  // 実装失敗例

  // useEffect(() => {
  //   const collectionData = collection(db, "Quiz");

  //   getDocs(collectionData).then((querySnapshot) => {
  //     setQ(querySnapshot.docs.map((doc) => doc.data()));
  //   });
  // }, []);

  // useEffect(() => {
  //   const data = query(collection(db, "Quiz"), orderBy("random"), limit(1));

  //   getDocs(data).then((querySnapshot) => {
  //     setQ(querySnapshot.docs.map((doc) => doc.data()));
  //   });
  // }, []);

  return (
    <div>
      <h1>sample</h1>

      {q.map((question) => (
        <Quiz
          questionContent={question.content}
          choice1={question.Choice1.Choice1_content}
          choice2={question.Choice2.Choice2_content}
          choice3={question.Choice3.Choice3_content}
          choice4={question.Choice4.Choice4_content}
          Choice1TF={question.Choice1.Choice1_TF}
          Choice2TF={question.Choice2.Choice2_TF}
          Choice3TF={question.Choice3.Choice3_TF}
          Choice4TF={question.Choice4.Choice4_TF}
          countTrue={countTrue}
          setCountTrue={setCountTrue}
          countFalse={countFalse}
          setCountFalse={setCountFalse}
        />
      ))}
    </div>
  );
}

export default Getquestion;
