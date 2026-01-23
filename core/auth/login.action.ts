import { User } from "@supabase/supabase-js";
import { supabase } from "../../supabase/config";
import { setToken } from "../storage/secure-storage.adapter";
import { Alert } from "react-native";

export const loginAction = async (
  email: string,
  password: string,
): Promise<User | null> => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    Alert.alert("Error", `Correo o contraseña inválido: ${error.message}`);
    return null;
  }

  await setToken(data.session.access_token);

  return data.user;
};
