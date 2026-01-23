import { Alert } from "react-native";
import { supabase } from "../../supabase/config";

export const insertNewUser = async (
  userId: string,
  username: string,
  fullName: string,
): Promise<boolean | null> => {
  const { error } = await supabase
    .from("users")
    .insert({ id: userId, username: username, full_name: fullName });

  if (error) {
    Alert.alert("Error", `Ha ocurrido un error inesperado: ${error.message}`);
    return null;
  }
  return true;
};
