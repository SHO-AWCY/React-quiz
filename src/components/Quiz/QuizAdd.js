import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import db from "../../firebase";
import ModalQuizAdd from "../Modal/ModalQuizAdd";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@material-ui/core";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";

function QuizAdd() {
  const [addContent, setAddContent] = useState("");
  const [addChoice1, setAddChoice1] = useState("");
  const [addChoice2, setAddChoice2] = useState("");
  const [addChoice3, setAddChoice3] = useState("");
  const [addChoice4, setAddChoice4] = useState("");
  const [addChoice1TF, setAddChoice1TF] = useState(true);
  const [addChoice2TF, setAddChoice2TF] = useState(true);
  const [addChoice3TF, setAddChoice3TF] = useState(true);
  const [addChoice4TF, setAddChoice4TF] = useState(true);
  const [showQuizAdd, setShowQuizAdd] = useState(false);

  const sendQuiz = (e) => {
    e.preventDefault();

    addDoc(collection(db, "Quiz"), {
      content: addContent,
      Choice1: { Choice1_content: addChoice1, Choice1_TF: addChoice1TF },
      Choice2: { Choice2_content: addChoice2, Choice2_TF: addChoice2TF },
      Choice3: { Choice3_content: addChoice3, Choice3_TF: addChoice3TF },
      Choice4: { Choice4_content: addChoice4, Choice4_TF: addChoice4TF },
    });

    setShowQuizAdd(true);
  };

  return (
    <div>
      <div className="add_content">
        <FormControl fullWidth>
          <TextField
            id="outlined-basic"
            variant="outlined"
            label="問題を入力してください"
            type="text"
            onChange={(e) => setAddContent(e.target.value)}
          />
        </FormControl>
      </div>
      <div className="add_choice1">
        <FormControl fullWidth>
          <TextField
            id="outlined-basic"
            variant="outlined"
            label="選択肢1を入力してください"
            type="text"
            onChange={(e) => setAddChoice1(e.target.value)}
          />
        </FormControl>

        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">選択肢1正誤</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="正誤"
            onChange={(e) => setAddChoice1TF(e.target.value)}
          >
            <MenuItem value={true}>正解</MenuItem>
            <MenuItem value={false}>不正解</MenuItem>
          </Select>
        </FormControl>
      </div>
      <div className="add_choice2">
        <FormControl fullWidth>
          <TextField
            id="outlined-basic"
            variant="outlined"
            label="選択肢2を入力してください"
            type="text"
            onChange={(e) => setAddChoice2(e.target.value)}
          />
        </FormControl>

        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">選択肢2正誤</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="正誤"
            onChange={(e) => setAddChoice2TF(e.target.value)}
          >
            <MenuItem value={true}>正解</MenuItem>
            <MenuItem value={false}>不正解</MenuItem>
          </Select>
        </FormControl>
      </div>
      <div className="add_choice3">
        <FormControl fullWidth>
          <TextField
            id="outlined-basic"
            variant="outlined"
            label="選択肢3を入力してください"
            type="text"
            onChange={(e) => setAddChoice3(e.target.value)}
          />
        </FormControl>

        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">選択肢3正誤</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="正誤"
            onChange={(e) => setAddChoice3TF(e.target.value)}
          >
            <MenuItem value={true}>正解</MenuItem>
            <MenuItem value={false}>不正解</MenuItem>
          </Select>
        </FormControl>
      </div>
      <div className="add_choice4">
        <FormControl fullWidth>
          <TextField
            id="outlined-basic"
            variant="outlined"
            label="選択肢4を入力してください"
            type="text"
            onChange={(e) => setAddChoice4(e.target.value)}
          />
        </FormControl>

        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">選択肢4正誤</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="正誤"
            onChange={(e) => setAddChoice4TF(e.target.value)}
          >
            <MenuItem value={true}>正解</MenuItem>
            <MenuItem value={false}>不正解</MenuItem>
          </Select>
        </FormControl>
      </div>
      <div>
        <Button variant="contained" onClick={sendQuiz}>
          <AddCircleOutlineOutlinedIcon />
          追加
        </Button>
      </div>
      <ModalQuizAdd showQuizAdd={showQuizAdd} setShowQuizAdd={setShowQuizAdd} />
    </div>
  );
}

export default QuizAdd;
