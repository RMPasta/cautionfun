import React, { useState, useEffect } from "react";
import Footer from "../../components/footer/Footer";
import SupaBaseAuth from "../../components/supabase-auth/SupaBaseAuth";
import { createClient } from '@supabase/supabase-js';
import "./home.css";
import { Link } from "react-router-dom";

export default function Home() {
  const [user, setUser] = useState({});

  const supabase = createClient(
    "https://ulcmvkngelimzcalrpza.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVsY212a25nZWxpbXpjYWxycHphIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODA5NjU4NjgsImV4cCI6MTk5NjU0MTg2OH0.eSZhbvhODeqcs41VVVKf5xKGqwjd7x2s55RWaEC3fRM"
  )

  useEffect(() => {
    const getUserData = async () => {
      await supabase.auth.getUser().then(value => {
        if (value.data?.user) {
          console.log(value.data.user)
          setUser(value.data.user)
        }
      })
    }
    getUserData();
  }, [])
  return (
    <div className="App">
      <SupaBaseAuth />
      <img
        src={require("../../images/yt-thumbnail.png")}
        alt="cautionfun logo"
        className="caution-pic"
      />
      <img
        src={require("../../images/lchammer.jpg")}
        alt="lchammer quote"
        className="lchammer"
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
          <div className="ref-link-btn-text">Ref Links</div>
        </Link>
      </div>
      <Footer />
    </div>
  );
}
