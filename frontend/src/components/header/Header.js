import React from "react";
import "./header.css";

export default function Header() {
  return (
    <div className="nav">
      <img
        src={require("../../images/yt-thumbnail.png")}
        alt="cautionfun logo"
        className="caution-pic-nav"
      />
      <div className="nav-container">
        <a href="/" className="nav-button">
          <div>Home</div>
        </a>
        <a href="/vault" className="nav-button">
          <div>Vault</div>
        </a>
        <a
          href="https://cautionfun.square.site"
          target="blank"
          className="nav-button"
        >
          <div>Merch</div>
        </a>
        <a href="/ref-links" className="nav-button">
          <div>Ref Links</div>
        </a>
      </div>
    </div>
  );
}
