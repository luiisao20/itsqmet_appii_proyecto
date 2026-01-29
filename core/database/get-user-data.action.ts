import { UserApp } from "../../interfaces/interfaces";
import { supabase } from "../../supabase/config";

export const getUserData = async (userId: string): Promise<UserApp> => {
  const { data, error } = await supabase
    .from("users")
    .select()
    .eq("id", userId)
    .single();

  if (error) throw new Error(error.message);

  const user: UserApp = {
    fullName: data.full_name,
    username: data.username,
    photoUrl: data.photo_url ?? undefined,
  };

  return user;
};
