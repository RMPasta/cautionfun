import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./header.css";

export default function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const [user, setUser] = useState("Sign In");
  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };

  const closeMenu = () => {
    if (!showMenu) return;
    setShowMenu(false);
  };

  return (
    <div className="nav">
      <Link to="/">
        <img
          src={require("../../images/yt-thumbnail.png")}
          alt="cautionfun logo"
          className="caution-pic-nav"
        />
      </Link>
      <div className="nav-container">
        {/* <div className={showMenu ? "login-modal" : "login-modal hidden"}>
            <p>FILLER</p>
        </div> */}
        <Link to="/" className="nav-button">
          <div>Home</div>
        </Link>
        <Link to="/vault" className="nav-button">
          <div>Vault</div>
        </Link>
        <Link to="/cc" className="nav-button">
          <div>$CC</div>
        </Link>
        <Link to="/ref-links" className="nav-button">
          <div>Ref Links</div>
        </Link>
        <Link
          to="https://cautionfun.square.site"
          target="blank"
          className="nav-button"
        >
          <div>Merch</div>
        </Link>

        {/* {!showMenu && (
          <button onClick={openMenu} className="nav-button">
            {user ? user : "Sign In"}
          </button>
        )} */}
      </div>
    </div>
  );
}
