import React from "react";
import { useNavigate } from "react-router-dom";
import { createClient } from "@supabase/supabase-js";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from '@supabase/auth-ui-shared';
import './supabaseauth.css'

export default function SupaBaseAuth(props) {

const supabase = createClient(
process.env.REACT_APP_SUPABASE_URL,
process.env.REACT_APP_ANON_KEY
);
const navigate = useNavigate();

const signOutUser = async () => {
    await supabase.auth.signOut();
    props.setShowMenu(false)
    props.setUser("Sign In")
    navigate('/')
  }

  return (
    <div>
        {props.user !== "Sign In" ?
        <button onClick={(() => signOutUser())} className="signout-button" >Sign Out</button> :
        <Auth supabaseClient={supabase} theme="dark" providers={["discord, email"]} appearance={{theme: ThemeSupa}} />}
    </div>
  );
}
