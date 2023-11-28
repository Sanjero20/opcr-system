export type AccountType = 'admin' | 'head' | 'individual' | 'pmt' | null;

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
