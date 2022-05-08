import React, { useState, useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../../firebase.js";
import { useNavigate } from "react-router-dom";
import { Navigate, Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import QuizIcon from "@mui/icons-material/Quiz";
import AddBoxIcon from "@mui/icons-material/AddBox";
import LogoutIcon from "@mui/icons-material/Logout";
import Header from "./Header.js";

const Home = () => {
  const [user, setUser] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
  }, []);

  const navigate = useNavigate();

  const logout = async () => {
    await signOut(auth);
    navigate("/login/");
  };

  return (
    <>
      {!loading && (
        <>
          {!user ? (
            <Navigate to={`/login/`} />
          ) : (
            <>
              <Header user={user} />
              <h1>HOME</h1>
              <div className="home-container">
                <Button variant="contained" component={Link} to="/quiz">
                  <QuizIcon />
                  クイズ開始
                </Button>
                <Button variant="contained" component={Link} to="/quizadd">
                  <AddBoxIcon />
                  クイズ追加
                </Button>

                {/* <button>成績確認</button> */}
              </div>
              <p>{user?.email}</p>
              <Button onClick={logout} variant="contained">
                <LogoutIcon />
                ログアウト
              </Button>

              {/* /* <button onClick={logout}>ログアウト</button> */}
            </>
          )}
        </>
      )}
    </>
  );
};
export default Home;

// #ebebeb
// #363330
// #afbdb0
// #bae3f9
