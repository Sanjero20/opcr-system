import { SuccessIndicator, Target } from '@/types/opcr.types';
import { ChangeEvent } from 'react';
import { create } from 'zustand';

interface OpcrStates {
  targets: Target[];
}

interface OpcrActions {
  setTargets: (targets: Target[]) => void;

  addTarget: () => void;
  deleteTarget: (index: number) => void;
  handleTarget: (e: ChangeEvent<HTMLInputElement>, index: number) => void;

  addSuccessIndicator: (targetIndex: number) => void;
  deleteSuccessIndicator: (targetIndex: number, successIndex: number) => void;
  handleSuccessIndicator: (
    e: ChangeEvent<HTMLInputElement>,
    targetIndex: number,
    successIndex: number,
  ) => void;
}

const initialSuccessIndicator: SuccessIndicator = {
  accomplishment: '',
  assigned_to: [''],
  budget: 0,
  division: '',
  indicator: '',
  rating: [0, 0, 0, 0],
  remarks: [''],
};

const initialTarget: Target = {
  name: '',
  success: [initialSuccessIndicator],
};

export const useOpcr = create<OpcrStates & OpcrActions>((set, get) => ({
  targets: [],

  setTargets: (targets) => {
    set({ targets });
  },

  // Target
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

  // Sucess
  addSuccessIndicator: (targetIndex) => {
    const targets = get().targets;

    const updatedTargets = targets.map((target, index) => {
      return index === targetIndex
        ? { ...target, success: [...target.success, initialSuccessIndicator] }
        : target;
    });

    set({ targets: updatedTargets });
  },

  deleteSuccessIndicator: (targetIndex, successIndex) => {
    const targets = get().targets;

    const updatedTargets = targets.map((target, index) => {
      if (index === targetIndex) {
        const updatedSuccessIndicators = target.success.filter(
          (val, index) => index !== successIndex,
        );

        return {
          ...target,
          success: updatedSuccessIndicators,
        };
      }

      return target;
    });

    set({ targets: updatedTargets });
  },

  handleSuccessIndicator: (e, targetIndex, indicatorIndex) => {
    const { name, value } = e.target;

    const targets = get().targets;

    const updatedTargets = targets.map((target, index) => {
      if (index === targetIndex) {
        const updatedSuccessIndicators = target.success.map(
          (indicator, index) => {
            if (index === indicatorIndex) {
              return {
                ...indicator,
                [name]: value,
              };
            }
            return indicator;
          },
        );

        return {
          ...target,
          success: updatedSuccessIndicators,
        };
      }

      return target;
    });

    set({ targets: updatedTargets });
  },
}));
