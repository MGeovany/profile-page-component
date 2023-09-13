import { createClient } from "@supabase/supabase-js";
import { SUPABASE_KEY, SUPABASE_URL } from "./constants";

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY, {
  persistSession: true,
  localStorage: window.localStorage,
});

export const getFirmData = async (firmId) => {
  try {
    let { data: firm, error } = await supabase
      .from("firm")
      .select("*")
      .eq("id", firmId);

    if (error) {
      console.error("Error fetching firm profile:", error);
      return null;
    }

    return firm;
  } catch (error) {
    console.error("An error occurred while fetching firm profile:", error);
    return null;
  }
};
