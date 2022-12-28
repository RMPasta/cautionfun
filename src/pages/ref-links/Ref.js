import React from "react";
import Footer from "../../components/footer/Footer";
import "./ref.css";

export default function Ref() {
  return (
    <div className="body">
      <div className="nav">
        <a href="/" className="nav-home">
          <div>Home</div>
        </a>
        <a
          href="https://cautionfun.square.site"
          target="blank"
          className="nav-ref"
        >
          <div>Merch</div>
        </a>
      </div>

      <h1>Referral Links</h1>
      <div className="three-wide-lists">
        <></>
        <div className="gu ref-card">
          <h2>Gods Unchained</h2>
          <div className="ref-card-contents">
            <h3>TokenTrove</h3>
            <div className="ref-button">
              <a
                href="https://tokentrove.com/collection/GodsUnchainedCards?ref=cautionfun"
                target="blank"
              >
                Ref Link
              </a>
            </div>
            <h3>IMXTools</h3>
            <div className="ref-button">
              <a
                href="https://imxtools.net/gu/marketplace?ref_id=cautionfun"
                target="blank"
              >
                Ref Link
              </a>
            </div>
          </div>
        </div>

        <div className="splinterlands ref-card">
          <h2>SplinterLands</h2>
          <div className="ref-card-contents">
            <div className="ref-button">
              <a
                href="https://splinterlands.com?ref=tst-cautionfun"
                target="blank"
              >
                Ref Link
              </a>
            </div>
          </div>
        </div>

        <div className="exchanges ref-card">
          <h2>Crypto Exchanges</h2>
          <div className="ref-card-contents">
            <h3>Cashapp</h3>
            <div className="ref-button">
              <a href="https://cash.app/app/PCPDFKG" target="blank">
                Ref Link
              </a>
            </div>
            <h3>Coinbase</h3>
            <div className="ref-button">
              <a href="https://www.coinbase.com/join/mcgowa_wc" target="blank">
                Ref Link
              </a>
            </div>
            <h3>Safe Trade</h3>
            <div className="ref-button">
              <a
                href="https://safe.trade/signup?refid=ID51D08A1AA7"
                target="blank"
              >
                Ref Link
              </a>
            </div>
          </div>
        </div>

        <div className="dexs ref-card">
          <h2>Decentralized Exchanges</h2>
          <div className="ref-card-contents">
            <h3>Paraswap</h3>
            <div className="ref-button">
              <a
                href="https://app.paraswap.io/?ref=MHhGOWI3ODUwZWU3NThDYTk4NzhBMDUyQUVlRDA0ZjI0QTUwNTMxZWEx"
                target="blank"
              >
                Ref Link
              </a>
            </div>
            <h3>DYDX</h3>
            <div className="ref-button">
              <a href="https://dydx.exchange/r/LELGFMOY" target="blank">
                Ref Link
              </a>
            </div>
          </div>
        </div>

        <div className="wallets ref-card">
          <h2>Hardware Wallets</h2>
          <div className="ref-card-contents">
            <h3>Trezor</h3>
            <div className="ref-button">
              <a
                href="https://trezor.go2cloud.org/aff_c?offer_id=133&aff_id=32184"
                target="blank"
              >
                Ref Link
              </a>
            </div>
          </div>
        </div>

        <div className="vpn ref-card">
          <h2>VPN</h2>
          <div className="ref-card-contents">
            <h3>Nord VPN</h3>
            <div className="ref-button">
              <a
                href="https://go.nordvpn.net/aff_c?offer_id=15&aff_id=62200"
                target="blank"
              >
                Ref Link
              </a>
            </div>
          </div>
        </div>
        <></>
      </div>
      <Footer />
    </div>
  );
}
