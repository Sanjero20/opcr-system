import { ChangeEvent } from 'react';
import { create } from 'zustand';

export type Remarks = {
  successID: string;
  remarks: string;
};

interface RemarkState {
  remarks: Remarks[];
}

interface RemarkAction {
  setRemarks: (remarks: Remarks[]) => void;
  handleRemarks: (e: ChangeEvent<HTMLInputElement>, successId: string) => void;
  resetRemarks: () => void;
}

export const useRemarks = create<RemarkState & RemarkAction>((set, get) => ({
  remarks: [],

  setRemarks: (remarks) => {
    set({ remarks });
  },

  handleRemarks: (e, successId) => {
    const remarks = get().remarks;

    const updatedRemarks = remarks.map((remarks) =>
      remarks.successID === successId
        ? { ...remarks, remarks: e.target.value }
        : remarks,
    );

    set({ remarks: updatedRemarks });
  },

  resetRemarks: () => {
    set({ remarks: [] });
  },
}));
