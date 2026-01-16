import { User } from "@supabase/supabase-js";
import { supabase } from "../../supabase/config";

export const registerAction = async (
  email: string,
  password: string
): Promise<User> => {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  });

  if (error) throw new Error(error.message);

  return data.user!;
};
