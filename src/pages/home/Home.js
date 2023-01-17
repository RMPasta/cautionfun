import React from "react";
import Footer from "../../components/footer/Footer";
import "./home.css";
import { Link } from "react-router-dom";

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
          <div>Ref Links</div>
        </Link>
      </div>
      <Footer />
    </div>
  );
}
