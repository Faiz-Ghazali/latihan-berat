import { create } from "zustand";
import { persist } from "zustand/middleware";
const MOCK_USER = [
  {
    id: "1",
    email: "admin@test.com",
    password: "admin123",
    name: "budi",
    role: "admin",
  },
  {
    id: "2",
    email: "user@test.com",
    password: "user123",
    name: "siti",
    role: "user",
  },
];
export const useAuthStore = create(persist((set) => ({
  user: null,
  error: null,
  login: (email, password) => {
    const foundUser = MOCK_USER.find(
      (u) => u.email === email && u.password === password,
    );
    if (foundUser) {
      set({
        user: {
          id: foundUser.id,
          email: foundUser.email,
          name: foundUser.name,
          role: foundUser.role,
        },
        error: null,
      });
      return true;
    } else {
      set({ error: "Email atau Password Salah!" });
      return false;
    }
  },
  logout: () => {
    set({ user: null, error: null });
  },
})));
