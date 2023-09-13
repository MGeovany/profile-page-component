import { createClient } from "@supabase/supabase-js";
import { SUPABASE_KEY, SUPABASE_URL } from "./constants";

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY, {
  persistSession: true,
  localStorage: window.localStorage,
});

export const getUser = async () => {
  try {
    const { data: user_profile, error } = await supabase
      .from("user_profile")
      .select("*");

    if (error) {
      console.error("Error fetching user profile:", error.message);
      return null;
    }

    return user_profile;
  } catch (error) {
    console.error("An error occurred while fetching user profile:", error);
    return null;
  }
};
