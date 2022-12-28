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
      <Footer />
    </div>
  );
}
