import { supabase } from "./initSupabase";

export const updateUserData = async (data, tableName, userId, id) => {
  try {
    const { data: updatedData, error } = await supabase
      .from(tableName)
      .update(data)
      .eq(id, userId)
      .select();

    if (error) {
      throw new Error(
        "Error updating data in Supabase: " + tableName + error.message
      );
    }

    return updatedData[0];
  } catch (error) {
    throw error;
  }
};
