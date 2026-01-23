import { User } from "@supabase/supabase-js";
import { supabase } from "../../supabase/config";
import { deleteItem, getItem } from "../storage/secure-storage.adapter";

export const checkSession = async (): Promise<User | null> => {
  const storedToken = await getItem();

  if (!storedToken) return null;

  const { data, error } = await supabase.auth.refreshSession({
    refresh_token: storedToken,
  });

  if (error) {
    await deleteItem();
    return null;
  }

  return data.session?.user!;
};
