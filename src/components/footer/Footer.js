import React from "react";
import "./footer.css";

export default function Footer() {
  return (
    <div className="footer">
      <ul className="socials">
        <li className="socials-container">
          <i className="fa-brands fa-twitch"></i>
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
  );
}
