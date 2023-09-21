import { create } from 'zustand';

interface AuthState {
  isLoggedIn: boolean;
  accountRole: 'admin' | 'opcr' | 'ipcr' | undefined;
  updateAuth: (role: 'admin' | 'opcr' | 'ipcr' | undefined) => void;
}

const useAuth = create<AuthState>((set, get) => ({
  isLoggedIn: false,
  accountRole: undefined,
  updateAuth: (role) =>
    set({
      isLoggedIn: true,
      accountRole: role,
    }),
}));

export default useAuth;
