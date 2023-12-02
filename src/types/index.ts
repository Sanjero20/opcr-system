export type Permission = 'admin' | 'head' | 'individual' | 'pmt';

export type Account = {
  _id: { $oid: string };
  name: string;
  email: string;
  username: string;
  password: string;
  permission: string;
  superior: string;
};

export type Office = {
  _id: { $oid: string };
  name: string;
  head: string;
  opcr: any[];
};

export type Campus = {
  _id: { $oid: string };
  name: string;
  offices: Office[];
  pmt: string[];
};

export type AccountCreated = {
  id: string;
  created: boolean;
  error: any;
  permission: 'head' | 'pmt' | 'indiv';
};

export type PMT_Office = {
  _id: { $oid: string };
  name: string;
  status: 'calibrated' | 'in progress' | 'rejected';
  progress: number;
};
