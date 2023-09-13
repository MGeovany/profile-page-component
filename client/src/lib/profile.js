import { supabase } from "./initSupabase";

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
