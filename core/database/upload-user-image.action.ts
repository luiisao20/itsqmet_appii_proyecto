import { Alert } from "react-native";
import { supabase } from "../../supabase/config";

export const uploadUserImage = async (
  image: Uint8Array<ArrayBuffer>,
  userId: string,
) => {
  const { error } = await supabase.storage
    .from("profile")
    .upload(`public/${userId}.png`, image, {
      cacheControl: "3600",
      upsert: true,
    });

  if (error) {
    Alert.alert("Error", `Ocurrió un error inesperado: ${error}`);
    return;
  }

  const { data } = supabase.storage
    .from("profile")
    .getPublicUrl(`public/${userId}.png`);

  const { error: errorUpdate } = await supabase
    .from("users")
    .update({ photo_url: data.publicUrl })
    .eq("id", userId);

  if (errorUpdate)
    Alert.alert("Error", `Ocurrió un error inesperado: ${errorUpdate}`);
};
