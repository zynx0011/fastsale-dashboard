import { create } from "zustand";

type AuthState = {
  user: object | null;
  isAuth: boolean;
  setAuth: (auth: any) => void;
};

export const useAuth = create<AuthState>((set) => ({
  user: null,
  isAuth: false,
  setAuth: (state: object | null) => {
    if (!state)
      set({
        user: state,
        isAuth: true,
      });
    set({
      user: null,
      isAuth: false,
    });
  },
}));
