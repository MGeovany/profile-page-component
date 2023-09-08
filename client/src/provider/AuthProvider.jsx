import React, { createContext, useState, useEffect, useRef } from "react";
import { supabase } from "../initSupabase";

const AuthContext = createContext({});

const AuthProvider = (props) => {
  // user null = loading
  const [user, setUser] = useState(null);
  const [session, setSession] = useState(null);

  useEffect(() => {
    async function getSession() {
      const {
        data: { session },
      } = await supabase.auth.getSession();
      setSession(session);
      setUser(session ? true : false);
      const { data: authListener } = supabase.auth.onAuthStateChange(
        async (event, session) => {
          console.log(`Supabase auth event: ${event}`);
          setSession(session);
          setUser(session ? true : false);
        }
      );
      return () => {
        authListener?.unsubscribe();
      };
    }

    getSession();
  }, [user]);

  return (
    <AuthContext.Provider
      value={{
        user,
        session,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
