import { AccountType } from '@/types/data-types';
import { create } from 'zustand';

interface AuthState {
  permission: AccountType;
  setPermission: (permission: AccountType) => void;
  removeAuth: () => void;
}

const useAuth = create<AuthState>((set, get) => ({
  permission: null,

  setPermission: (role) => set({ permission: role }),

  removeAuth: () => set({ permission: null }),
}));

export default useAuth;
