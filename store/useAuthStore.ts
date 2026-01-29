import { User } from "@supabase/supabase-js";
import { create } from "zustand";
import { RegisterNewUser } from "../screens/RegisterScreen";
import { loginAction } from "../core/auth/login.action";
import { registerAction } from "../core/auth/register.action";
import { checkSession } from "../core/auth/check-session.action";
import { supabase } from "../supabase/config";

interface AuthState {
  user?: User;
  loading: boolean;

  checkSession: () => Promise<boolean>;
  login: (email: string, password: string) => Promise<boolean>;
  register: (userData: RegisterNewUser) => Promise<boolean>;
  logout: () => Promise<void>;
}

export const useAuthStore = create<AuthState>()((set, get) => ({
  user: undefined,
  loading: false,

  login: async (email: string, password: string) => {
    set({ loading: true });
    const user = await loginAction(email, password);

    if (user) {
      set({ user, loading: false });
      return true;
    }

    set({ loading: false });
    return false;
  },

  register: async (userData: RegisterNewUser) => {
    set({ loading: true });

    const user = await registerAction(userData);
    if (user) {
      set({ user, loading: false });
      return true;
    }

    set({ loading: false });
    return false;
  },

  checkSession: async () => {
    set({ loading: true });
    const user = await checkSession();
    if (user) {
      set({ user, loading: false });
      return true;
    }
    set({ loading: false });
    return false;
  },

  logout: async () => {
    await supabase.auth.signOut();
    return;
  },
}));
