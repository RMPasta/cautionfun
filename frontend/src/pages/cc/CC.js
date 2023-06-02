import React from 'react';
import { Link } from 'react-router-dom';
import './CC.css';


export default function CC() {

  return (
    <div className='cautioncoin'>
      <h1 className='cautionh1'>CautionCoin</h1>
      <h2 className='cautionh2'>A Peer-to-Peer Electronic Social Token System</h2>
      <div className='text-block-1'>
      <p>CautionCoin is a social token designed to reward our most supportive community members, incentivize participation, and return value to our ecosystem.</p>
      <p>CautionCoin is built on the Verus blockchain, a secure, scalable, and permissionless platform that provides a foundation for the creation of social tokens with true underlying value.</p>
      <p>Unlike most social tokens, CautionCoin will launch with inherent value that does not depend upon the efforts or actions of the creator. And as the ecosystem scales, clear paths to increase the system's inherent value are defined, and value is not limited by time and energy. The potential future utility of CautionCoin is limited only by our collective imaginations.</p>
      <p>I’d like to invite you to join the community and help shape the future of CautionCoin.</p>
      <p>Launching June 9th.</p>
      </div>
      <Link to="/cc/whitepaper" className="whitepaper-button">
          <div>WHITEPAPER</div>
      </Link>
      <h2 className='cautionh2'>How to prepare:</h2>
      <div className='text-block-2'>
      <p>Download a Verus wallet from <a className='a-tag' target="blank" href="https://verus.io/wallet">https://verus.io/wallet</a></p>
      <p>-Guide: <a className='a-tag' target="blank" href="https://peakd.com/verus/@cautionfun/getting-set-up-with-verus-desktop-wallet">https://peakd.com/verus/@cautionfun/getting-set-up-with-verus-desktop-wallet</a></p>
      <p>-Back up your wallet: <a className='a-tag' target="blank" href="https://wiki.verus.io/#!how-to/how-to_backup_my_wallet.md">https://wiki.verus.io/#!how-to/how-to_backup_my_wallet.md</a></p>
      <p>Join the <a className='a-tag' target="blank" href="https://discord.gg/2cKPdAkUCq">TeamStreamTeam discord</a></p>
      <p>Follow me on <a className='a-tag' target="blank" href="https://twitch.tv/cautionfun_gu">Twitch</a></p>
      <p>And <a className='a-tag' target="blank" href="https://twitter.com/cautionfun_">Twitter</a></p>
      </div>
    </div>
  );
}
