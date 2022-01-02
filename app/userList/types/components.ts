export type tUserMode =
  | "myProvider"
  | "providers"
  | "customers"
  | "customerRequest";
export interface IUserCardProps {
  mode: tUserMode;
  id: string;
  fullName: string;
  description: string;
  profileImageUrl: string;
}
