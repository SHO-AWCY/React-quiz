import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import QuizAdd from "./components/Quiz/QuizAdd";
import Register from "./components/Login/Register";
import SampleFire from "./components/Quiz/Getquestion";

const App = () => {
  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route path={`/register/`} element={<Register />} />
          <Route path={`/login/`} element={<Login />} />
          <Route path={`/`} element={<Home />} />
          <Route path={`/quiz/`} element={<SampleFire />} />
          <Route path={`/quizadd/`} element={<QuizAdd />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
