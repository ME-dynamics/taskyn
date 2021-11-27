export interface IUser {
  id: string;
  role: string;
  username: string;
  firstName: string | undefined;
  lastName: string | undefined;
  description: string | undefined;
  gender: "male" | "female";
  birthday: string | undefined;
  profilePictureUrl: string | undefined;
  address: string | undefined;
  telephone: string | undefined;
  createdAt: Date;
  modifiedAt: Date;
}
