import React from "react";
import "./footer.css";

export default function Footer() {
  return (
    <div className="footer">
      <ul className="socials">
        <li className="socials-container">
          <a href="https://twitch.tv/cautionfun_gu" target="blank">
            <i className="fa-brands fa-twitch"></i>
            cautionfun_gu
          </a>
        </li>
        <li className="socials-container">
          <a href="https://twitter.com/cautionfun_" target="blank">
            <i className="fa-brands fa-twitter"></i>
            @cautionfun
          </a>
        </li>
        <li className="socials-container">
          <a href="https://discord.gg/Z7CeepuUPe" target="blank">
            <i className="fa-brands fa-discord"></i>
            @cautionfun#3236
          </a>
        </li>
      </ul>
    </div>
  );
}
