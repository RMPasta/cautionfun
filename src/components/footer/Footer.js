import React from "react";
import "./footer.css";

export default function Footer() {
  return (
    <div className="footer">
      <div className="address-container">
        <div className="address">
          <img src="https://upload.wikimedia.org/wikipedia/commons/4/46/Bitcoin.svg" alt="Bitcoin logo" />
          <p>BTC: bc1qutvrfse6q4n3073lcr3thpx46xyr9tx50nz3h9</p>
        </div>
        <div className="address">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Ethereum_logo_2014.svg/1200px-Ethereum_logo_2014.svg.png" alt="Ethereum logo" />
          <p>ETH: 0x98c0fe160b049d3436d2c3c26bf454fcfad2a8c1</p>
        </div>
        <div className="address">
          <img src="https://imgs.search.brave.com/CNStDCGflYL-LvUKXNdzBftkV4eFGjQ0h-PjOL4nJEg/rs:fit:250:249:1/g:ce/aHR0cHM6Ly9jb2lu/YXJiaXRyYWdlYm90/LmNvbS9pbmMvY29p/bl9sb2dvcy92ZXJ1/cy1jb2luLnBuZw" alt="Verus Coin logo" />
          <p>VRSC: RGabSv4JLkvUeQQbCFED18gDDLGU8STrbs</p>
        </div>
      </div>
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
