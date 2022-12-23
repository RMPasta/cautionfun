import React from "react";

export default function Home() {
  return (
    <div className="App">
      <img src={require("./images/yt-thumbnail.jpeg")} alt="cautionfun logo" />

      <h1>Cautionfun</h1>

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
          <li className="socials-container">
            <i class="fa-brands fa-twitch"></i>
            <a href="https://twitch.tv/cautionfun_gu" target="blank">
              cautionfun_gu
            </a>
          </li>
          <li className="socials-container">
            <i class="fa-brands fa-twitter"></i>
            <a href="https://twitter.com/cautionfun_" target="blank">
              @cautionfun
            </a>
          </li>
          <li className="socials-container">
            <i class="fa-brands fa-discord"></i>
            <a href="https://discord.gg/Z7CeepuUPe" target="blank">
              @cautionfun#3236
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
