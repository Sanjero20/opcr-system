import { SuccessIndicator, Target } from '@/types/opcr.types';
import { ChangeEvent } from 'react';
import { create } from 'zustand';

interface OpcrStates {
  targets: Target[];
}

interface OpcrActions {
  addTarget: () => void;
  deleteTarget: (index: number) => void;
  handleTarget: (e: ChangeEvent<HTMLInputElement>, targetIndex: number) => void;
}

const initialTarget: Target = {
  name: '',
  success: [],
};

const initialSuccessIndicator: SuccessIndicator = {
  accomplishment: '',
  assigned_to: [''],
  budget: 0,
  division: '',
  indicator: '',
  rating: [0, 0, 0, 0],
  remarks: [''],
};

export const useOpcr = create<OpcrStates & OpcrActions>((set, get) => ({
  targets: [initialTarget],

  addTarget: () => {
    const latestTargets = get().targets;
    set({ targets: [...latestTargets, initialTarget] });
  },

  deleteTarget: (index) => {
    const latestTargets = get().targets;
    latestTargets.splice(index, 1);
    set({ targets: latestTargets });
  },

  handleTarget: (e, targetIndex) => {
    const value = e.target.value;

    const latestTargets = get().targets;
    const updatedTargets = latestTargets.map((target, index) => {
      return index === targetIndex ? { ...target, name: value } : target;
    });

    set({ targets: updatedTargets });
  },
}));
