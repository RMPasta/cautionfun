import React, { Redirect } from 'react';
import { createClient } from '@supabase/supabase-js';
import { Auth } from '@supabase/auth-ui-react';


export default function SupaBaseAuth() {

    const supabase = createClient(
        "https://ulcmvkngelimzcalrpza.supabase.co",
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVsY212a25nZWxpbXpjYWxycHphIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODA5NjU4NjgsImV4cCI6MTk5NjU0MTg2OH0.eSZhbvhODeqcs41VVVKf5xKGqwjd7x2s55RWaEC3fRM"
    )

    supabase.auth.onAuthStateChange(async (event) => {
        if (event !== "SIGNED_OUT") {
            // forward to success route
            <Redirect to="/ref-links" />
        } else {
            // forward home
            <Redirect to="/" />
        }
    })

  return (
    <div>
        <Auth
        supabaseClient={supabase}
        theme={"dark"}
        providers={["discord"]}
        />
    </div>
  )
}
