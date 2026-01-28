import { supabase } from "../../supabase/config";

export const updatePassword = async (
  email: string,
  oldPassord: string,
  newPassword: string,
): Promise<boolean> => {
  const { error } = await supabase.auth.signInWithPassword({
    email,
    password: oldPassord,
  });

  if (error) {
    throw new Error("La contraseña antigua no es correcta");
  }

  const { error: errorPassword } = await supabase.auth.updateUser({
    password: newPassword,
  });

  if (errorPassword) {
    throw new Error(`Ocurrió un error inesperado ${errorPassword}`);
  }

  return true;
};
