import React from "react";
import "./Header.css";

function Header({ user }) {
  return (
    <div>
      <header>
        <div>
          <h1>QUIZ</h1>
        </div>
        <div>
          <p>{user?.email}</p>
        </div>
      </header>
    </div>
  );
}

export default Header;
