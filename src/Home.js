import React from "react";

export default function Home() {
  return (
    <div className="App">
      <img src={require("./images/yt-thumbnail.jpeg")} alt="cautionfun logo" />

      <h1>Cautionfun</h1>
      <h2>Stuff</h2>

      <div className="two-across">
        <a href="/merch" className="block merch">
          <div>Merch</div>
        </a>
        <a href="/ref-links" className="block ref-links">
          <div>Ref Links</div>
        </a>
      </div>

      <div className="footer">
        <ul className="socials">
          <li>
            <img src="socialIcon" alt="socials" />
            <a href="sociallink">Social</a>
          </li>
          <li>
            <img src="socialIcon" alt="socials" />
            <a href="sociallink">Social</a>
          </li>
          <li>
            <img src="socialIcon" alt="socials" />
            <a href="sociallink">Social</a>
          </li>
          <li>
            <img src="socialIcon" alt="socials" />
            <a href="sociallink">Social</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
