import * as SecureStore from "expo-secure-store";

export const setToken = async (value: string) => {
  try {
    await SecureStore.setItemAsync("token_supabase", value);
  } catch (error) {
    throw error;
  }
};

export const getItem = async () => {
  try {
    return await SecureStore.getItemAsync("token_supabase");
  } catch (error: any) {
    throw error;
  }
};

export const deleteItem = async () => {
  try {
    await SecureStore.deleteItemAsync("token_supabase");
  } catch (error: any) {
    throw error;
  }
};
