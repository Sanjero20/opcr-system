export type OPCR = {
  _id: { $oid: string };
  accepted: boolean;
  archived: boolean;
  owner: string;
  status: OPCR_Status;
  targets: Target[];
};

export type Target = {
  _id: { $oid: string };
  name: string;
  success: SuccessIndicator[];
};

export type SuccessIndicator = {
  _id?: { $oid: string };
  accomplishment: string;
  assigned_to: string[];
  budget: number;
  division: string;
  indicator: string;
  rating: number[];
  remarks: string[];
};

export type OPCR_Status = 'in progress' | 'calibrated' | 'rejected';
