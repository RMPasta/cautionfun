import React from "react";
import "./footer.css";

export default function Footer() {

  function copyElementText(id1, id2) {
    let text = document.getElementById(id1).innerText;
    let elem = document.createElement("textarea");
    let clipboard = document.querySelector(`.${id2}`);
    clipboard.classList.remove("fa-clipboard");
    clipboard.classList.add("fa-clipboard-check")
    setTimeout(() => {
    clipboard.classList.remove("fa-clipboard-check");
    clipboard.classList.add("fa-clipboard")
    }, 2000)

    document.body.appendChild(elem);
    elem.value = text;
    elem.select();
    document.execCommand("copy");
    document.body.removeChild(elem);
}

  return (
    <div className="footer">
      <ul className="socials">
        <li>
          <a
            className="socials-container"
            href="https://twitch.tv/cautionfun_gu"
            target="blank"
          >
            <i className="fa-brands fa-twitch"></i>
            cautionfun_gu
          </a>
        </li>
        <li>
          <a
            className="socials-container"
            href="https://twitter.com/cautionfun_"
            target="blank"
          >
            <i className="fa-brands fa-twitter"></i>
            @cautionfun
          </a>
        </li>
        <li>
          <a
            className="socials-container"
            href="https://discord.gg/Z7CeepuUPe"
            target="blank"
          >
            <i className="fa-brands fa-discord"></i>
            @cautionfun#3236
          </a>
        </li>
      </ul>
      <div className="address-container">
        <h2 className="donations">Donations:</h2>
        <div className="address">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/4/46/Bitcoin.svg"
            alt="Bitcoin logo"
          />
          <p class="addy">BTC: <p id="btc-addy">bc1qutvrfse6q4n3073lcr3thpx46xyr9tx50nz3h9</p><i class="fa-solid fa-clipboard btc" onClick={() => copyElementText("btc-addy", "btc")}></i></p>
        </div>
        <div className="address">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Ethereum_logo_2014.svg/1200px-Ethereum_logo_2014.svg.png"
            alt="Ethereum logo"
          />
          <p class="addy">ETH: <p id="eth-addy">0x98c0fe160b049d3436d2c3c26bf454fcfad2a8c1</p><i class="fa-solid fa-clipboard eth" onClick={() => copyElementText("eth-addy", "eth")}></i></p>
        </div>
        <div className="address">
          <img
            src="https://imgs.search.brave.com/CNStDCGflYL-LvUKXNdzBftkV4eFGjQ0h-PjOL4nJEg/rs:fit:250:249:1/g:ce/aHR0cHM6Ly9jb2lu/YXJiaXRyYWdlYm90/LmNvbS9pbmMvY29p/bl9sb2dvcy92ZXJ1/cy1jb2luLnBuZw"
            alt="Verus Coin logo"
          />
          <p class="addy">VRSC: <p id="vrsc-addy">RGabSv4JLkvUeQQbCFED18gDDLGU8STrbs</p><i class="fa-solid fa-clipboard vrsc" onClick={() => copyElementText("vrsc-addy", "vrsc")}></i></p>
        </div>
      </div>
    </div>
  );
}
