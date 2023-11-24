export type AccountInfo = {
  _id: { $oid: string };
  name: string;
  email: string;
  username: string;
  password: string;
  permission: string;
  superior: string;
};
