import React, { useState } from "react";
import "./header.scss"
import Navbar from "../navbar/Navbar";
const Header = () => {

  const [username, setUsername] = useState("User");
  return (
    <div className="head">
      <div className="head-left">
        <h4>Thanhpdc BookStore</h4>
        <div className="welcome">
          <h5>Welcome, {username}</h5>
        </div>
      </div>
      <div className="head-right">
        <Navbar />
      </div>

    </div>
  )
};

export default Header;