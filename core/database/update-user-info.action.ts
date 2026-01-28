import { Alert } from "react-native";
import { supabase } from "../../supabase/config";

export const updateUserInfo = async (
  userId: string,
  username: string,
  name: string,
): Promise<boolean> => {
  const { error } = await supabase
    .from("users")
    .update({ username: username.toLowerCase(), full_name: name })
    .eq("id", userId);

  if (error) {
    Alert.alert("Error", `Ha ocurrido un error ${error.message}`);
    return false;
  }

  return true;
};
