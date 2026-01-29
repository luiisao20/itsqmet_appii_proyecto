import { User } from "@supabase/supabase-js";
import { supabase } from "../../supabase/config";

export const checkSession = async (): Promise<User | null> => {
  const { data, error } = await supabase.auth.getSession();

  if (error) return null

  return data.session?.user!;
};
