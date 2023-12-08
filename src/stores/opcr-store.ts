import { create } from 'zustand';
import { v4 as uuid } from 'uuid';
import { OPCR_Status, SuccessIndicator, Target } from '@/types/opcr.types';

interface OpcrStates {
  status: OPCR_Status | null;
  targets: Target[];
}

interface OpcrActions {
  setStatus: (status: OPCR_Status) => void;
  setTargets: (targets: Target[]) => void;

  addTarget: (target: Target) => void;
  deleteTarget: (targetId: string) => void;

  resetOPCR: () => void;
}

export const initialSuccessIndicator: SuccessIndicator = {
  accomplishment: '',
  assigned_to: [''],
  budget: 0,
  division: '',
  indicator: '',
  rating: [0, 0, 0, 0],
  remarks: [''],
};

export const useOpcr = create<OpcrStates & OpcrActions>((set, get) => ({
  status: null,
  targets: [],

  setStatus: (status) => {
    set({ status });
  },

  setTargets: (targets) => {
    set({ targets });
  },

  addTarget: (target) => {
    const latestTargets = get().targets;
    set({ targets: [...latestTargets, target] });
  },

  deleteTarget: (targetId) => {
    const targets = get().targets;
    const latestTargets = targets.filter(
      (target) => target._id.$oid !== targetId,
    );

    set({ targets: latestTargets });
  },

  resetOPCR: () => {
    set({ targets: [] });
  },
}));
