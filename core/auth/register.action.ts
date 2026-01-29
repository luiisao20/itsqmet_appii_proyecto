import { User } from "@supabase/supabase-js";
import { supabase } from "../../supabase/config";
import { RegisterNewUser } from "../../screens/RegisterScreen";
import { insertNewUser } from "../database/insert-new-user.action";
import { Alert } from "react-native";

export const registerAction = async (
  dataUser: RegisterNewUser,
): Promise<User | null> => {
  const { data, error } = await supabase.auth.signUp({
    email: dataUser.email,
    password: dataUser.password,
  });

  if (error) {
    Alert.alert("Error", `Correo o contraseña inválido: ${error.message}`);
    return null;
  }
  const resp = await insertNewUser(
    data.user?.id!,
    dataUser.username,
    dataUser.name,
  );

  if (!resp) {
    return null;
  }

  return data.user!;
};
