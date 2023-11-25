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
  name: string;
  head: string;
  opcr: string[];
};

export type Campus = {
  _id: string;
  name: string;
  offices: Office[];
  pmt: string[];
};
