import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SupaBaseAuth from "../../components/supabase-auth/SupaBaseAuth";
import { createClient } from "@supabase/supabase-js";
import "./header.css";

export default function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const [user, setUser] = useState("Sign In");
  const [session, setSession] = useState(null)
  const navigate = useNavigate();
  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };

  const closeMenu = () => {
    if (!showMenu) return;
    setShowMenu(false);
  };

  const supabase = createClient(
    process.env.REACT_APP_SUPABASE_URL,
    process.env.REACT_APP_ANON_KEY
  );

  useEffect(() => {
    const getUserData = async () => {
      await supabase.auth.getUser().then((value) => {
        if (value.data?.user) {
          if (value.data.user.identities[0].identity_data.name) {
            //set discord name
            setUser(value.data.user.identities[0].identity_data.name);
          } else {
            //set email name
            setUser(value.data.user.identities[0].identity_data.email.split("@")[0]);
        }
        }
    });
};
getUserData();
}, []);

  return (
    <div className="nav">
      <img
        src={require("../../images/yt-thumbnail.png")}
        alt="cautionfun logo"
        className="caution-pic-nav"
      />
      <div className="nav-container">
      <div className={showMenu ? "login-modal" : "login-modal hidden"}>
        <SupaBaseAuth showMenu={showMenu} setShowMenu={setShowMenu} setUser={setUser} user={user}/>
      </div>
        <a href="/" className="nav-button">
          <div>Home</div>
        </a>
        <a href="/vault" className="nav-button">
          <div>Vault</div>
        </a>
        <a
          href="https://cautionfun.square.site"
          target="blank"
          className="nav-button"
          >
          <div>Merch</div>
        </a>
        <a href="/ref-links" className="nav-button">
          <div>Ref Links</div>
        </a>
          { !showMenu && <button onClick={openMenu} className="nav-button">{user ? user : "Sign In"}</button> }
          { showMenu && <button onClick={closeMenu} className="nav-button">{user ? user : "Sign In"}</button> }
      </div>
    </div>
  );
}
