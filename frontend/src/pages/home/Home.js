import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import "./home.css";

export default function Home() {
  return (
    <div className="App">
      <img
        src={require("../../images/yt-thumbnail.png")}
        alt="cautionfun logo"
        className="caution-pic"
      />
      <img
        src={require("../../images/lchammer.jpg")}
        alt="lchammer quote"
        className="lchammer"
      />
      <div className="two-across">
        <a
          href="https://cautionfun.square.site"
          target="blank"
          className="block merch"
        >
          <div>Merch</div>
        </a>
        <Link to="/ref-links" className="block ref-links">
          <div className="ref-link-btn-text">Ref Links</div>
        </Link>
      </div>
    </div>
  );
}
