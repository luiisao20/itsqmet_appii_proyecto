import { User } from "@supabase/supabase-js";
import { supabase } from "../../supabase/config";
import { RegisterNewUser } from "../../screens/RegisterScreen";

export const registerAction = async (dataUser: RegisterNewUser): Promise<User> => {
  const { data, error } = await supabase.auth.signUp({
    email: dataUser.email,
    password: dataUser.password,
  });

  

  if (error) throw new Error(error.message);

  return data.user!;
};
