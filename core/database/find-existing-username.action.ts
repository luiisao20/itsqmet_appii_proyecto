import { supabase } from "../../supabase/config";

export const findExistingUsername = async (
  username: string,
): Promise<boolean> => {
  const { data, error } = await supabase
    .from("users")
    .select()
    .ilike("username", `%${username.toLowerCase()}%`);

  if (error) throw new Error(error.message);

  if (data.length > 0) return true;

  return false;
};
