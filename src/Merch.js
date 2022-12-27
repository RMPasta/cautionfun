import React from "react";
import Footer from "./Footer.js";

export default function Merch() {
  return (
    <div className="body">
      <div className="nav">
        <a href="/" className="nav-home">
          <div>Home</div>
        </a>
        <a href="/ref-links" className="nav-ref">
          <div>Ref Links</div>
        </a>
      </div>

      <h1>Merch</h1>
      <Footer />
    </div>
  );
}
