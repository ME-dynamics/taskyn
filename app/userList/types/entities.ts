export interface IUser {
  id: string;
  role: string;
  firstName: string | undefined;
  lastName: string | undefined;
  description: string | undefined;
  profilePictureUrl: string | undefined;
}
