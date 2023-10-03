import { Account } from '@/types/account';
import { create } from 'zustand';

interface AuthState {
  permission: Account;
  setPermission: (permission: Account) => void;
  removeAuth: () => void;
}

const useAuth = create<AuthState>((set, get) => ({
  permission: null,

  setPermission: (role) => set({ permission: role }),

  removeAuth: () => set({ permission: null }),
}));

export default useAuth;
