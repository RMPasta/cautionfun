import React from "react";
import Footer from "./Footer.js";

export default function Home() {
  return (
    <div className="App">
      <img src={require("./images/yt-thumbnail.png")} alt="cautionfun logo" />

      <h1>Cautionfun</h1>

      <div className="two-across">
        <a href="/merch" className="block merch">
          <div>Merch</div>
        </a>
        <a href="/ref-links" className="block ref-links">
          <div>Ref Links</div>
        </a>
      </div>
      <Footer />
    </div>
  );
}
