import { User } from "@supabase/supabase-js";
import { supabase } from "../../supabase/config";

export const loginAction = async (
  email: string,
  password: string
): Promise<User> => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) throw new Error(error.message);

  return data.user;
};
