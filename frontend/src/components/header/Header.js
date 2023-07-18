import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./header.css";
import axios from "axios";

export default function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const [loggedIn, setLoggedIn] = useState(
    localStorage.getItem("isLoggedIn") === "true" ? true : false
  );
  const [user, setUser] = useState({});
  const [signInButton, setSignInButton] = useState("Sign In");
  const location = useLocation();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const code = searchParams.get("code");

    if (code && loggedIn === false) {
      const logInUser = async () => {
        if (loggedIn) return;
        const response = await fetch(
          `http://127.0.0.1:5000/auth/discord/callback?code=${code}`
        );
        if (response.status === 200) {
          const data = await response.json();
          setUser(data.user);
          setLoggedIn(true);
          localStorage.setItem("isLoggedIn", "true");
        }
      };
      logInUser();
    }
  }, []);

  // useEffect(() => {
  //   const getUser = async () => {
  //     if (loggedIn) {
  //       const response = await fetch("http://127.0.0.1:5000/auth/info", {
  //         method: "GET",
  //       });
  //       const data = await response.json();
  //       console.log(data);
  //     }
  //   };
  //   getUser();
  // }, []);

  // useEffect(() => {
  //   const testing = async () => {
  //     if (loggedIn) {
  //       const response = await fetch("http://127.0.0.1:5000/", {
  //         method: "GET",
  //       });
  //       const data = await response.json();
  //       console.log(data);
  //     }
  //   };
  //   testing();
  // }, []);

  const discordAuthUrl = `https://discord.com/api/oauth2/authorize?client_id=1094275757397786804&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2F&response_type=code&scope=identify`;
  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };

  const closeMenu = () => {
    if (!showMenu) return;
    setShowMenu(false);
  };

  const handleDiscordLogin = () => {
    // Perform the necessary logic to redirect the user to the Discord authorization URL
    window.location.href = discordAuthUrl;
  };

  const setSession = async () => {
    axios
      .get("http://127.0.0.1:5000/set", {
        withCredentials: true,
      })
      .then((response) => console.log(response.data))
      .catch((error) => console.error(error));
  };

  const getSession = async () => {
    axios
      .get("http://127.0.0.1:5000/get", {
        withCredentials: true,
      })
      .then((response) => console.log(response.data))
      .catch((error) => console.error(error));
  };

  const logOut = () => {
    localStorage.removeItem("isLoggedIn");
    fetch("http://127.0.0.1:5000/auth/logout");
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
          {!loggedIn ? (
            <>
              <button onClick={handleDiscordLogin} className="nav-button">
                Sign In
              </button>
              <button onClick={handleDiscordLogin} className="nav-button">
                Sign In
              </button>
            </>
          ) : (
            <button onClick={logOut} className="nav-button">
              Log Out
            </button>
          )}
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
        <button onClick={() => setShowMenu(!showMenu)} className="nav-button">
          {loggedIn ? user.discord_username : "Discord Login"}
        </button>
        <button onClick={setSession}>SET SESSION</button>
        <button onClick={getSession}>GET SESSION</button>
        {/* {showMenu && (
          <button onClick={closeMenu} className="nav-button">
            {user ? user : "Sign In"}
          </button>
        )} */}
      </div>
    </div>
  );
}
