export interface IUser {
  id: string;
  role: string;
  firstName: string | undefined;
  lastName: string | undefined;
  description: string | undefined;
  profilePictureUrl: string | undefined;
}

export interface ICustomerRequest {
  customerId: string;
  providerId: string;
  requestConfirmed: boolean;
  name: string;
  profilePictureUrl: string;
  description: string;
}
