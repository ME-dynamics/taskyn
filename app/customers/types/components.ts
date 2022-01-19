export interface ICustomerCardProps {
  id: string;
  fullName: string;
  description: string;
  profileImageUrl: string;
  onPress: (id: string) => void;
}
