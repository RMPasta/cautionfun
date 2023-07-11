import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./header.css";

export default function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const [user, setUser] = useState("Sign In");
  const discordAuthUrl = `https://discord.com/api/oauth2/authorize?client_id=1094275757397786804&redirect_uri=localhost%3A3000&response_type=code&scope=identify`;
  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };

  const closeMenu = () => {
    if (!showMenu) return;
    setShowMenu(false);
  };

  // const supabase = createClient(
  //   process.env.REACT_APP_SUPABASE_URL,
  //   process.env.REACT_APP_ANON_KEY
  // );

  //   useEffect(() => {
  //     const getUserData = async () => {
  //       await supabase.auth.getUser().then((value) => {
  //         if (value.data?.user) {
  //           if (value.data.user.identities[0].identity_data.name) {
  //             //set discord name
  //             setUser(value.data.user.identities[0].identity_data.name);
  //           } else {
  //             //set email name
  //             setUser(value.data.user.identities[0].identity_data.email.split("@")[0]);
  //         }
  //         }
  //     });
  // };
  // getUserData();
  // }, [supabase.auth]);

  // Redirect the user to the Discord authorization URL

  const handleDiscordLogin = () => {
    // Perform the necessary logic to redirect the user to the Discord authorization URL
    // You can use window.location.href = AUTH_URL or use a library like react-router-dom to handle the redirection.
    // Make sure to replace AUTH_URL with the actual Discord authorization URL.
    window.location.href = discordAuthUrl;
  };

  return (
    <div className="nav">
      <Link to="/">
        <img
          src={require("../../images/yt-thumbnail.png")}
          alt="cautionfun logo"
          className="caution-pic-nav"
        />
      </Link>
      <div className="nav-container">
        <div className={showMenu ? "login-modal" : "login-modal hidden"}>
          {/* <SupaBaseAuth showMenu={showMenu} setShowMenu={setShowMenu} setUser={setUser} user={user}/> */}
        </div>
        <Link to="/" className="nav-button">
          <div>Home</div>
        </Link>
        <Link to="/vault" className="nav-button">
          <div>Vault</div>
        </Link>
        <Link to="/cc" className="nav-button">
          <div>$CC</div>
        </Link>
        <Link to="/ref-links" className="nav-button">
          <div>Ref Links</div>
        </Link>
        <Link
          to="https://cautionfun.square.site"
          target="blank"
          className="nav-button"
        >
          <div>Merch</div>
        </Link>

        {!showMenu && (
          <button onClick={handleDiscordLogin} className="nav-button">
            {user ? user : "Sign In"}
          </button>
        )}
        {showMenu && (
          <button onClick={closeMenu} className="nav-button">
            {user ? user : "Sign In"}
          </button>
        )}
      </div>
    </div>
  );
}
